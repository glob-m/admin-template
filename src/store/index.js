import Vue from 'vue'
import Vuex from 'vuex'
import { getToken } from '../utils/token'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    product_http: 'http://test.zhxfw.com'
  },
  mutations: {
  },
  actions: {
  }
})
