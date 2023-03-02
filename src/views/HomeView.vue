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

    <mt-swipe  >
      <mt-swipe-item><img src="../assets/3C產品/3C1.jpg" alt="" ></mt-swipe-item>
      <mt-swipe-item><img src="../assets/3C產品/3C2.png" alt="" ></mt-swipe-item>
      <mt-swipe-item><img src="../assets/3C產品/3C3.jpg" alt="" ></mt-swipe-item>
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
<div class="back">
  <div
  id="hotlist"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <div v-for="(item,index) in list" :key="index"  id="box">

    <div id="imgPart">  
      <img src="../assets/daily2.jpeg" alt="">
    </div>

    <div id="detail">
      <div style="background-color: red;color: white;" class="topic">
        <span>促銷熱賣第{{ item }}名</span>
      </div>
      <div class="delContent">
        <span>項目{{ item }} </span> <br>
        <span>定價:{{ price }} 元</span> <br>
        <span>特價:{{ discount }} 折</span> 
      </div>
    </div>

  </div>
</div>
</div>


</div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 1,
        // n:1,
        content:'內文',
        // h:'110px',
        num:10,
        loading:false,
        list:10,
        price: Math.floor(Math.random()*10000),
        discount:Math.floor(Math.random()*100)
      }
    },
    methods:{
      loadMore(){
        this.loading = true
        window.setTimeout(()=>{
          this.list += 5
          this.loading = false
        },1000)
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
#hotlist{
  display: flex;
  flex-direction: column;;
  & img{
    // float:left;
    margin-left:0px;
    width: 120px;
    height: 95%;
    padding-right: 6px;
  }
}

#box{
  display: flex;
  flex-direction: row;
  border:1px solid gray;
  border-radius:4px;
}

.mint-swipe{
  height:350px;
}
.mint-swipe img{
  width:100%;
  height: 100%;
}


#detail{
  display: flex;
  flex-direction: column;
  flex:1 2
}

#imgPart{
  border-right: 1px solid gray;
}

.delContent{
  line-height: 30px;
  padding-top:5px;
  text-align:start;
}
.topic{
  text-align: center;
}

.delContent{
  align-items: stretch;
}
</style>