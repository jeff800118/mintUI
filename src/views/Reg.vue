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

            <mt-button size="large" type="primary"  @click="checkData">送出</mt-button>
        </div>
        <div id="middle"></div>
        <div v-show="unameBool && upwdBool && reupwdBool && checkData">
            <mt-field
            label="姓名"
            placeholder="請輸入姓名"
            v-model="username"
            type="password"
            :state="success"
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

            <mt-button type="primary" size="large">註冊</mt-button>
        </div>
    </div>
</template>

<script>
import { getEnvironmentData } from 'worker_threads'

    export default {
        data() {
            return {
                uname: "",
                upwd:"",
                reupwd:"",
                username:"",
                gender:1,
                email:"",
                phone:"",
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
                    value:1
                },{
                    label:'女',
                    value:0
                }]
            }
        },
        methods:{
            getDetail(){
                if(this.unameBool && this.upwdBool && this.reupwdBool){
                    btn.classList.remove('disabled') 
                }
            },
            unameBlur(){
                let regExp = /^[\w]{4,8}$/
                if(this.uname == ""){
                    this.$toast('帳號不得為空')
                }else if(this.uname.match(regExp)){
                    this.unameState = "success"
                    this.unameBool = true
                    this.$toast('格式正確')
                }else{
                    this.$toast('帳號請輸入4-8為英文或數字')
                    this.unameState = "error"
                    this.unameBool = false
                }
            },
            upwdBlur(){
                let regExp = /^[\w]{6,10}$/
                if(this.upwd == ""){
                    this.$toast('密碼不得為空')
                }else if(this.upwd.match(regExp)){
                    this.upwdState = "success"
                    this.upwdBool = true
                    this.$toast('格式正確')
                }else{
                    this.$toast('密碼請輸入6-10為英文或數字')
                    this.upwdState = "error"
                    this.upwdBool = false
                }
            },
            reupwdBlur(){
                if(this.reupwd == ""){
                    this.$toast('密碼確認不得為空')
                }else if(this.upwd == this.reupwd){
                    this.reupwdState = "success"
                    this.reupwdBool = true
                    this.$toast('與密碼符合')
                }else{
                    this.$toast('與密碼不符')
                    this.reupwdState = "error"
                    this.reupwdBool = false
                }
            },
            checkData(){
                if(this.unameBool && this.upwdBool && this.reupwdBool){
                    this.check = true
                    this.$toast('請填入個人詳情')
                }
            }
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