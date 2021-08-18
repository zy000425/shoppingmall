<template>
  <div class="back-top" @click="topClick">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    methods: {
      topClick() {
        this.$emit('topClick')
      }
    }
  }
</script>

<style>
  .back-top {
    position: fixed;
    right: 5px;
    bottom: 55px;
  }
  .back-top img {
    width: 40px;
    height: 40px;
  }
</style>