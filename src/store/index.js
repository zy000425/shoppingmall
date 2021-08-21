import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(state, payload) {
      let oldProduct = null
      for (let item of state.cartList) {
        if (item.iid === payload.iid) oldProduct = item
      }
      if (oldProduct) {
        this.commit('addCounter', oldProduct)
      } else {
        payload.count = 1
      }
    }
  },
  modules: {
  }
})
