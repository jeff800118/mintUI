<template>
    <div>
        <mt-header
        title="用戶註冊頁"
        fixed
        ><router-link to="/" slot="left"><mt-button
        icon="back"
        >返回</mt-button></router-link></mt-header>

        <div id="main">
            <mt-field
            label="帳號"
            placeholder="請輸入帳號"
            v-model="uname"
            :state="unameState"
            @blur.native.capture="unameBlur"
            disableClear
            ></mt-field>

            <mt-field
            label="密碼"
            placeholder="請輸入密碼"
            v-model="upwd"
            type="password"
            disableClear
            :state="upwdState"
            @blur.native.capture="upwdBlur"
            ></mt-field>

            <mt-field
            label="密碼確認"
            placeholder="請再次輸入密碼"
            v-model="reupwd"
            :state="reupwdState"
            type="password"
            @blur.native.capture="reupwdBlur"
            disableClear
            ></mt-field>

            <mt-button size="large" type="primary" ref="btn" disabled @click="checkData()">送出</mt-button>
        </div>
        <div id="middle"></div>
        <!-- <div v-show="unameBool && upwdBool && reupwdBool"> -->
        <div v-show="check">
            <mt-field
            label="姓名"
            placeholder="請輸入姓名"
            v-model="username"
            disableClear
            ></mt-field>

            <mt-radio
            style="font-size:25px"
            title="性別"
            v-model="value"
            :options="options"
            disableClear
            ></mt-radio>

            <mt-field
            label="信箱"
            placeholder="請輸入信箱"
            v-model="email"
            type="email"
            disableClear
            ></mt-field>

            <mt-field
            label="電話"
            placeholder="請輸入電話"
            v-model="phone"
            type="phone"
            disableClear
            ></mt-field>

            <mt-field
            label="住址"
            placeholder="請輸入住址"
            v-model="address"
            type="address"
            disableClear
            ></mt-field>

            <mt-button type="primary" size="large" @click="regData()">註冊</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uname: "",
                upwd:"",
                reupwd:"",
                username:"",
                email:"",
                phone:"",
                value:'1',
                address:"",
                unameBool:false,
                upwdBool:false,
                reupwdBool:false,
                emailBool:false,
                phoneBool:false,
                disabledBool:false,
                unameState:"",
                upwdState:"",
                reupwdState:"",
                usernameState:"",
                phoneState:"",
                check:false,
                options:[{
                    label:'男',
                    value:'1',
                },{
                    label:'女',
                    value:'0'
                }]
            }
        },
        methods:{
            unameBlur(){
                let regExp = /^[\w]{4,8}$/
                let url = `/queryUser?account_name=${this.uname}`
                this.axios.get(url).then((res)=>{
                    // console.log(res)
                    if(this.uname == ""){
                        this.$toast('帳號不得為空')
                        this.unameState = "warning"
                    }else if(res.data == 1){
                        this.unameState = "warning"
                        this.$toast('帳號已被註冊')
                        return this.unameBool = false
                    }else if(this.uname.match(regExp) && res.data == 0){
                        this.unameState = "success"
                        this.$toast('格式正確，帳號可使用')
                        return this.unameBool = true
                    }else{
                        this.$toast('帳號請輸入4-8為英文或數字')
                        this.unameState = "error"
                        return this.unameBool = false
                    }
                })
            },
            upwdBlur(){
                let regExp = /^[\w]{6,10}$/
                if(this.upwd == ""){
                    this.$toast('密碼不得為空')
                    return this.upwdState = "warning"
                }else if(this.upwd.match(regExp)){
                    this.upwdState = "success"
                    this.$toast('格式正確')
                    return this.upwdBool = true
                }else{
                    this.$toast('密碼請輸入6-10為英文或數字')
                    this.upwdState = "error"
                    return this.upwdBool = false
                }
            },
            reupwdBlur(){
                if(this.reupwd == ""){
                    this.$toast('密碼確認不得為空')
                    this.reupwdState = "warning"
                }else if(this.upwd == this.reupwd){
                    this.reupwdState = "success"
                    this.$toast('與密碼符合')
                    return this.reupwdBool = true
                }else{
                    this.$toast('與密碼不符')
                    this.reupwdState = "error"
                    return this.reupwdBool = false
                }
            },
            regaccount(){
                let url='/reg'
                let params = `account_name=${this.uname}&account_password=${this.$md5(this.upwd)}&account_permission=1`
                this.axios.post(url,params).then((res)=>{
                    console.log(res)
                    if(res.data == 1){
                        this.$toast('註冊成功')
                    }else if(res.data == 0){
                        this.$toast('註冊失敗')
                    }
                })
            },
            reguser(){
                let url='/regdetail'
                let params = `user_name=${this.username}&user_sex=${this.value}&user_mail=${this.email}&user_phone=${this.phone}&user_address=${this.address}`
                this.axios.post(url,params).then((res)=>{
                    console.log(res)
                    if(res.data == 1){
                        this.$toast('註冊成功')
                    }else if(res.data == 0){
                        this.$toast('註冊失敗')
                    }
                })
            },
            checkTick(){
                setInterval(()=>{
                    if(this.unameBool && this.upwdBool && this.reupwdBool){
                        return this.$refs.btn.disabled = false
                    }else if(this.unameBool || this.upwdBool || this.reupwdBool != true){
                        this.check = false
                        return this.$refs.btn.disabled = true  
                    }
                },1000)
            },
            regData(){
                this.reguser()
                this.regaccount()
                this.$router.push('/login')
            },
            checkData(){
                if(this.unameBool && this.upwdBool && this.reupwdBool){
                    this.$toast('請填入個人詳情')
                    this.check = true
                }
            },
        },
        mounted(){
            this.checkTick()
         },
         beforeDestroy(){
            clearInterval(this.setInterval)
         }
    }
</script>

<style lang="scss" scoped>
#main{
    margin-top:40px;
}
// #middle{
//     height:15px;
//     background-color: rgba(236, 232, 232, 0.938);
//     margin-top:5px;
//     // width:558px;
//     // margin-left:0
// }
</style>