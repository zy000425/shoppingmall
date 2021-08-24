<template>
  <div class="user-info">
    <div class="user-image">
      <img src="@/assets/img/profile/defaultAvatar.jpg">
    </div>
    <div class="user-log">
      <div class="top">登录/注册</div>
      <div class="bottom">未绑定手机号</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo'
  }
</script>

<style scoped>
  .user-info {
    width: 100%;
    padding: 1.25rem .9375rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-tint);
    color: #fff;
    border-bottom-left-radius: .5625rem;
    border-bottom-right-radius: .5625rem;
  }
  .user-image {
    flex: 1;
  }
  .user-image img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .user-log {
    flex: 2;
  }
  .user-log .top {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
  }
</style>