<template>
    <div>
        <mt-header
        title="用戶資訊"
        fixed
        ><router-link to="/login" slot="left"><mt-button
        icon="back"
        ></mt-button></router-link>
        <mt-button
            icon="more"
            slot="right"
            ></mt-button>
        </mt-header>

        <div class="img">
            <img src="../assets/login.png"  alt="">
        </div>
    
        <mt-field
        class="input"
        style="margin-top:40px"
        label="用戶編號 :"
        :value="ac_num"
        readonly
        disableClear
        >
        </mt-field>
        
        <mt-field
        class="input"
        label="姓名 :"
        readonly
        :value="uname"
        disableClear
        >
        </mt-field>

        <mt-field
        class="input"
        label="性別 :"
        readonly
        :value="gender"
        disableClear
        >
        </mt-field>

        <mt-field
        class="input"
        label="電話 :"
        readonly
        :value="phone"
        disableClear
        >
        </mt-field>

        <mt-field
        class="input"
        label="住址 :"
        :value="address"
        readonly
        disableClear
        >
        </mt-field>

        <mt-field
        class="input"
        label="會員層級名 :"
        :value="permission"
        readonly
        disableClear
        >
        </mt-field>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ac_num: "",
                uname:'',
                username:'',
                gender:'',
                phone:'',
                address:'',
                permission:'',
                data:'',
                address:""
            }
        },
        methods:{
            getData(){
                let url = '/list'
                this.axios.get(url).then((res)=>{
                    console.log(res)
                    // if(this.$store.state)
                    // this.username = res.data.user_name
                    for(let i = 0; i < res.data.length; i++){
                        if(this.$store.state.uname == res.data[i].account_name){
                            this.uname = res.data[i].account_name
                            this.ac_num = res.data[i].account_num
                            this.username = res.data[i].user_name
                            this.gender = res.data[i].user_sex
                            this.phone = res.data[i].user_phone
                            this.address = res.data[i].user_address
                            this.permission = res.data[i].permission_name
                        }
                    }
                })
            }
        },
        mounted(){
            this.getData()
        }
    }
</script>

<style lang="scss" scoped>
.input{
    font-weight: bolder;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.img{
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>