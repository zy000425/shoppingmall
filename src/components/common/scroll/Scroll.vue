<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      // 创建scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动距离
      this.scroll.on('scroll', position => {
        this.$emit('scrollMove', position.y)
      })
      // 上拉加载
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style scoped>
  
</style>
