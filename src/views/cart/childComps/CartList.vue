<template>
    <div class="cart-list">
      <cart-list-item v-for="item in cartList" :key="item.iid" :itemInfo="item"/>
    </div>
</template>

<script>
  import CartListItem from '@/views/cart/childComps/CartListItem'

  export default {
    name: 'CartList',
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      CartListItem
    }
  }
</script>

<style>

</style>