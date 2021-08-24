<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, delay=1500) {
        console.log(111);
        this.isShow = true
        this.message = message
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, delay)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: .625rem .9375rem;
    color: #fff;
    background-color: rgba(0, 0, 0, .7);
    z-index: 999;
  }
</style>