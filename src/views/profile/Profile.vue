<template>
  <div id="person">
    <nav-bar class="nav-bar">
      <div slot="center">个人主页</div>
    </nav-bar>
    <user-info/>
    <order/>
    <setting/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import UserInfo from './childComps/UserInfo'
  import Order from './childComps/Order'
  import Setting from './childComps/Setting'
  
  export default {
    name: "Profile",
    components: {
      NavBar,
      UserInfo,
      Order,
      Setting
    }
  }
</script>

<style scoped>
  #person {
    height: 100vh;
    background-color: #eee;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>