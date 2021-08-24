<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodListItem',
    props: {
     goodsItem: {
        type: Object,
        deault() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      },
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding: 10px 4px 40px;
    position: relative;
    width: 100%;
    break-inside: avoid;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '☆';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 16px;
    height: 16px;
    font-size: 15px;
    line-height: 16px;
    /* background: url("@/assets/img/common/collect.svg") 0 0/14px 14px; */
  }
</style>