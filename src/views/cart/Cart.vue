<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车（{{this.$store.state.cartList.length}}）</div>
    </nav-bar>
    <scroll class="concent" ref="scroll">
      <cart-list :cartList="cartList"/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'

  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  export default {
    name: "Cart",
    data() {
      return {
        cartList: this.$store.state.cartList
      }
    },
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    created() {
      this.$bus.$on('addCart', () => {
        this.$refs.scroll.scroll.refresh()
      })
      // this.$bus.$on('checkClick', () => {
      //   this.$store.dispatch('checked')
      // })
    }
  }
</script>

<style scoped>
  #cart {
    background-color: #eee;
  }
  .cart-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .concent {
    height: calc(100vh - 8.9375rem);
    overflow: hidden;
  }
</style>