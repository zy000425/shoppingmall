<template>
  <div class="order">
    <div>
      <img src="@/assets/img/profile/delivery.svg">
      <span>未发货</span>
    </div>
    <div>
      <img src="@/assets/img/profile/receiving.svg">
      <span>未收货</span>
    </div>
    <div>
      <img src="@/assets/img/profile/assess.svg">
      <span>评价</span>
    </div>
    <div>
      <img src="@/assets/img/profile/after-sale.svg">
      <span>售后</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Order'
  }
</script>

<style>
  .order {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 1.875rem 1.25rem;
    margin: .625rem 0 .625rem;
    border-radius: .5625rem;
  }
  .order div {
    text-align: center;
    width: 3.125rem;
    display: flex;
    flex-direction: column;
    align-items: center
  }
  .order div img {
    width: 2.0625rem;
  }
</style>