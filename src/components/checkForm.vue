<template>
    <div>

    </div>
</template>

<script>
    export default {
        methods:{
            checkUname(){
                let regExp = /^[\w]{4,8}$/
                if(this.uname.match(regExp)){
                    this.unameState = success
                    this.unameBool = true
                }else{
                    this.$toast('請確認格式是否正確')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>