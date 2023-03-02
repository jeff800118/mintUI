<template>
  <div>
    <mt-header
    title="首頁"
    fixed
    >
    <router-link to="/login" slot="right" style="text-decoration: none;">登入&nbsp; | </router-link>
    <router-link to="/reg" slot="right" style="text-decoration: none;">&nbsp;註冊</router-link>
    </mt-header>

    <!-- 導欄行 -->
    <mt-navbar v-model="selected" style="margin-top:40px" >
      <mt-tab-item id="1" style="margin-bottom: auto">家具</mt-tab-item>
      <mt-tab-item id="2" style="margin-bottom: auto">美妝</mt-tab-item>
      <mt-tab-item id="3" style="margin-bottom: auto">3C</mt-tab-item>
    </mt-navbar>

    <mt-swipe :auto="4000" :style="{height:h}">
      <mt-swipe-item><img src="../assets/3C產品/3C1.jpg" alt="" style="height:230px;width:100%"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/3C產品/3C1.jpg" alt="" style="height:230px;width:100%"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/3C產品/3C1.jpg" alt="" style="height:230px;width:100%"></mt-swipe-item>
    </mt-swipe>

    <!-- 導欄行內容 -->
    <!-- tab-container -->
    <mt-tab-container v-model="selected" class="itemSelected">
      <mt-tab-container-item id="1">
        <router-link to="/login">
          <mt-cell v-for="(n,i) in num":title="'家具 ' + n" :key="i" />
        </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <router-link to="/login">
          <mt-cell v-for="(n,i) in num" :title="'美妝 ' + n" :key="i"/>
        </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <router-link to="/login">
          <mt-cell v-for="(n,i) in num" :title="'3C ' + n" :key="i"/>
        </router-link>
      </mt-tab-container-item>
</mt-tab-container>
<ul
  class="hotlist"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="(item,index) in list" :key="index">促銷熱賣{{ item }}
  <img src="../assets/daily2.jpeg" alt="">
  <div >價格:{{ price }} 元</div>
</li>
</ul>

</div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 1,
        // n:1,
        content:'內文',
        h:'250px',
        num:10,
        loading:false,
        list:10,
        price: Math.floor(Math.random()*10000)
      }
    },
    methods:{
      loadMore(){
        this.loading = true
        window.setTimeout(()=>{
          this.list += 5
          this.loading = false
        },1000)
      },
      price(){
        this.price = Math.floor(Math.random()*10000)
      }
    },
    mounted(){
      this.price()
    }
    
  }
</script>

<style lang="scss" scoped>
.itemSelected{
  text-align: center;
  
  & a{
    color: white;
    // border:  solid red;
    // border-radius: 50%;
    margin-bottom: 2px;
    background-color: rgb(167, 187, 149);
  }
}
a{
  text-decoration: none;
}
.hotlist{
  line-height: 60px;
  border:1px solid black;
  list-style: none;
  display: flex;
  flex-direction: column;
  & img{
    float:left;
    margin-left:0px;
    width: 100px;
    margin-bottom: 50px;
    padding-right: 50px;
  }
}
</style>