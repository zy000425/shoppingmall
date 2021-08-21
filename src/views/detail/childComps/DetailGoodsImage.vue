<template>
  <div class="goods-image">
    <span>{{images.desc}}</span>
    <div v-for="(item, index) in images.detailImage" :key="index" class="image-info">
      <div class="text">{{item.key}}</div>
      <ul v-for="(item, index) in item.list" :key="index">
        <li class="image-list"><img :src="item" @load="imageLoad"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsImage',
    props: {
      images: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('detailImageLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-image {
    padding: 20px 8px;
  }
  .image-info {
    margin-top: 20px;
  }
  .image-info .text {
    font-size: 17px;
    text-align: center;
    color: #000;
    letter-spacing:2px;
    text-shadow: #FC0 1px 0 10px;
    margin: 10px 0;
  }
  .image-list img {
    width: 100%;
  }
</style>