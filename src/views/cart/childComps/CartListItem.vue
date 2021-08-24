<template>
  <div id="cart-list-item">
    <div class="item-selector">
      <check-button v-model="itemInfo.checked" @checkBtnClick="checkBtnClick"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="item-bottom">
        <div class="item-price">{{'￥' + itemInfo.price}}</div>
        <div class="item-count">{{'×' + itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  export default {
    name: 'CartListItem',
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkBtnClick() {
        this.itemInfo.checked = !this.itemInfo.checked
      }
    }
  }
</script>

<style scoped>
  #cart-list-item {
    width: 100%;
    display: flex;
    padding: .3125rem;
    margin: .3125rem 0;
    /* border-bottom: .0625rem solid #ccc; */
    background-color: #fff;
    border-radius: 9px;
  }
  .item-selector {
    width: 1.25rem;
    padding: 0 .3125rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img {
    margin-right: .3125rem;
  }
  .item-img img{
    display: block;
    width: 5rem;
    height: 6.25rem;
    border-radius: 9%;
  }
  .item-info {
    font-size: 1.125rem;
    color: #333;
    padding: .3125rem .625rem;
    position: relative;
    overflow: hidden;
  }
  .item-title, .item-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-info .item-desc {
    color: #919191;
    font-size: .875rem;
    margin-top: .9375rem;
  }
  .item-bottom {
    position: absolute;
    margin-top: .625rem;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content:space-between
  }
  .item-price {
    color: #ff7b00;
  }
  .item-count {
    padding: .1875rem;
    font-size: .75rem;
    border: 1px solid #ccc;
    border-radius: .3125rem;
  }
</style>