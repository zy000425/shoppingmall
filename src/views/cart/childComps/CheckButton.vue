<template>
  <div>
    <div class="icon-selector" :class="{'selector-active': checked}" @click="selectItem">
      <img src="@/assets/img/cart/tick.svg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
		  return {
		    checked: this.value
      }
    },
    methods: {
      selectItem() {
        this.$emit('checkBtnClick')
      }
    },
    watch: {
		  value(newValue) {
        this.checked = newValue
      }
    }
  }
</script>

<style>
  .icon-selector {
    position: relative;
    margin: 0;
    width: .9375rem;
    height: .9375rem;
    border-radius: 50%;
    border: .0625rem solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>