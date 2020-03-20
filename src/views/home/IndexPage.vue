<template>
  <div class="user-wrapper">
    <header-list></header-list>
    <div class="user-body">
      <aside-list class="aside"></aside-list>
      <main-list class="main"></main-list>
    </div>
  </div>
</template>

<script>

import HeaderList from './HeaderList'
import AsideList from './AsideList'
import MainList from './MainList'

export default {
  name: 'HomePage',
  components: {
    HeaderList,
    AsideList,
    MainList
  }
}
</script>

<style lang="scss" scoped>
  .user-wrapper{
    font-size: 14px;
    background-color: #f5f5f5;
    min-height: 100vh;
    min-width: 1200px;
    .user-body{
      overflow: hidden;
      width: 1200px;
      margin: 0 auto;
      .aside{
        float: left;
        width: 200px;
      }
      .main{
        float: left;
        width: calc(100% - 200px);
      }
    }
  }
</style>
