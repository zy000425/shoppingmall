<template>
  <div v-if="Object.keys(goods).length" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="goods-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 20px;
    padding: 0 8px;
    border-bottom: 3px solid #f2f5f8;
  }
  .info-title {
    color: #3c3c3c;
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
  }
  .goods-price {
    padding-bottom: 15px;
  }
  .new-price {
    color: var(--color-tint);
    font-size: 26px;
    padding-right: 5px;
  }
  .old-price {
    text-decoration: line-through;
    padding-right: 5px;
  }
  .discount {
    position: relative;
    bottom: 8px;
    margin-top: 10px;
    padding: 2px 5px;
    color: #fff;
    background-color: #f13e3a;
    font-size: 10px;
    border-radius: 9px;
  }
  .info-other, .info-service {
    display: flex;
    justify-content: space-between;
  }
  .info-other {
    line-height: 30px;
    font-size: 13px;
    border-bottom: 1px solid #6464641a;
  }
  .info-service {
    line-height: 40px;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-service-item {
    font-size: 13px;
    color: #333;
  }
</style>