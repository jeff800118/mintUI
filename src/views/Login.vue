<template>
    <div>
        <mt-header
        title="用戶登入頁"
        fixed
        ><router-link to="/" slot="left"><mt-button 
            icon="back" >返回</mt-button></router-link>
            <mt-button
            icon="more"
            slot="right"
            ></mt-button>
        </mt-header>

        <mt-field style="margin-top:40px"
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

        <mt-button @click="getData">登入</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uname: "",
                upwd:"",
                reupwd:"",
                state:""
            }
        },
        methods:{
            getData(){
                let url = `/login`
                let params = `account_name=${this.uname}&account_password=${this.$md5(this.upwd)}`
                this.axios.post(url,params).then((res)=>{
                    console.log(res)
                    if(res.data == 1){
                        this.$toast({
                            message:'登入成功',
                            position:'center',
                        })
                        this.$store.commit('updateUname',this.uname)
                        this.$router.push('./list')
                    }else if(res.data == 0){
                            this.$toast({
                                message:'登入失敗',
                                position:'center'
                            })
                        }
                })
            },
            checkUname(){
                let regExp = /^[A-Z][a-z0-9]{4,9}/
                if(this.uname.length >=4 && this.uname.length <= 9 && this.uname.match(regExp)){
                    this.unameBool = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>