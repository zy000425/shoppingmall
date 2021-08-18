<template>
  <div class="goods">
      <goods-list-item v-for="(item, id) in goods" :goodsItem="item" :key="id"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  // import Waterfall from 'vue-waterfall-easy'
  export default {
    name: 'GoodList',
    props: {
      goods: {
        type: Array,
        deault() {
          return []
        }
      }
    },
    components: {
      GoodsListItem,
      // Waterfall
    }
  }
</script>

<style scoped>
  .goods {
    /* display: flex; */
    /* flex-wrap: wrap; */
    justify-content: space-around;
    column-count: 2;
    column-gap: 2px;
    padding: 2px;
  }
</style>