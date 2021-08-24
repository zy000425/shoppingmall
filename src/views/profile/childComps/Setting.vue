<template>
  <div class="setting">
    <div>
      <span>收货地址</span>
      <span>></span>
    </div>
    <div>
      <span>账户</span>
      <span>></span>
    </div>
    <div>
      <span>支付</span>
      <span>></span>
    </div>
    <div>
      <span>通用</span>
      <span>></span>
    </div>
    <div>
      <span>关于</span>
      <span>></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Setting'
  }
</script>

<style scoped>
  .setting {
    background-color: #fff;
    margin-bottom: .625rem;
    padding: 1.875rem 1.25rem;
    border-radius: .5625rem;
  }
  .setting div {
    display: flex;
    justify-content: space-between;
    padding: .625rem .3125rem;
    margin-bottom: .625rem;
    border-bottom: .0625rem solid #ccc;
  }
  .setting :last-child {
    margin-bottom: 0;
    border-bottom: none
  }
</style>