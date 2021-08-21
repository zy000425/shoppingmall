<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left-nav" @click="back">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center-nav">
        <span v-for=" (item, index) in titles" :key="index"
         class="center-nav-item" :class="{active: index === currentIndex}"
         @click="itemClick(index)">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    props: {
      result: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('itemClick', index)
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  #detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .center-nav {
    display: flex;
    font-size: 14px;
    color: var(--text-color);
  }
  .center-nav-item {
    flex: 1;
  }
  .left-nav img {
    width: 26%;
    padding-top: 14px;
  }
  .active {
    color: var(--color-high-text);
  }
</style>