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
      <mt-tab-item id="1" style="margin-bottom: auto">動畫</mt-tab-item>
      <mt-tab-item id="2" style="margin-bottom: auto">遊戲</mt-tab-item>
      <mt-tab-item id="3" style="margin-bottom: auto">手遊</mt-tab-item>
    </mt-navbar>

    <mt-swipe :auto="4000" :style="{height:h}">
      <mt-swipe-item><img src="../assets/3C產品/3C1.jpg" alt="" style="height:230px;width:100%"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/3C產品/3C1.jpg" alt="" style="height:230px;width:100%"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/3C產品/3C1.jpg" alt="" style="height:230px;width:100%"></mt-swipe-item>
    </mt-swipe>

    <!-- 導欄行內容 -->
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10":title="'動畫 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'遊戲 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'手遊 ' + n" />
      </mt-tab-container-item>
</mt-tab-container>

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
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>