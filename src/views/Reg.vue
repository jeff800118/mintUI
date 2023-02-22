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
            ></mt-field>

            <mt-field
            label="密碼"
            placeholder="請輸入密碼"
            v-model="upwd"
            type="password"
            ></mt-field>

            <mt-field
            label="密碼確認"
            placeholder="請再次輸入密碼"
            v-model="reupwd"
            type="password"
            ></mt-field>

            <mt-button size="large" type="primary" disabled id="btn" >送出</mt-button>
        </div>
        <div id="middle"></div>
        <div v-show="unameBool && upwdBool && reupwdBool">
            <mt-field
            label="姓名"
            placeholder="請輸入姓名"
            v-model="username"
            type="password"
            :state="unameBool"
            ></mt-field>

            <mt-radio
            style="font-size:25px"
            title="性別"
            v-model="value"
            :options="options"
            ></mt-radio>

            <mt-field
            label="信箱"
            placeholder="請輸入信箱"
            v-model="email"
            type="email"
            ></mt-field>

            <mt-field
            label="電話"
            placeholder="請輸入電話"
            v-model="phone"
            type="phone"
            ></mt-field>

            <mt-field
            label="住址"
            placeholder="請輸入住址"
            v-model="address"
            type="address"
            ></mt-field>

            <mt-button type="primary" size="large">註冊</mt-button>
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