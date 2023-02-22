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
      <mt-tab-item id="3" style="margin-bottom: auto">隊伍</mt-tab-item>
    </mt-navbar>

    <!-- 導欄行內容 -->
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10":title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'content ' + n" />
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
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>