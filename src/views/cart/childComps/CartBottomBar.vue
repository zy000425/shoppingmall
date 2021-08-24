<template>
  <div id="bottom-bar">
    <div class="bottom-left bar-item">
      <check-button v-model="checkedAll" @checkBtnClick="checkAllClick"/>
      <span>全选</span>
    </div>
    <div class="bottom-right bar-item">
      <div class="bottom-total">合计{{totalPrice}}</div>
      <div class="bottom-submit" @click="submit">结算</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  export default {
    name: 'CartBottomBar',
    data() {
      return {
        checkedAll: false
      }
    },
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      }
    },
    methods: {
      checkAllClick() {
        this.checkedAll = !this.checkedAll
        if(this.checkedAll) {
          this.$store.state.cartList.forEach(item => item.checked = true)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = false)
        }
      },
      submit() {
        if(!this.checkedAll) {
          this.$toast.show('您还没有选择商品')
        }
      }
    },
    updated() {
      this.checkedAll = this.$store.state.cartList.every(item => {
        return item.checked
      })
    }
  }
</script>

<style scoped>
  #bottom-bar {
    position: absolute;
    bottom: 3.0625rem;
    display: flex;
    padding: .3125rem;
    height: 3.125rem;
    width: 100%;
    border-top: .0625rem solid #ccc;
    background-color: #fff;
  }
  .bar-item {
    flex: 1;
  }
  .bottom-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .bottom-left img {
    width: .9375rem;
    height: .9375rem;
    border-radius: 50%;
    border: .0625rem solid #ccc;
    cursor: pointer;
    /* background-color: pink; */
  }
  .bottom-left span {
    margin-left: .625rem;
  }
  .bottom-total{
    color: var(--color-tint);
    margin-right: .625rem;
  }
  .bottom-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .bottom-submit {
    color: #fff;
    width: 3.75rem;
    height: 1.875rem;
    text-align: center;
    line-height: 1.875rem;
    border-radius: 1rem;
    background-color: #ff7b00;
  }
</style>