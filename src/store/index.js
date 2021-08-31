import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from '../store/modules/loginModule'
import routeModule from '../store/modules/routeModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginModule,
    routeModule
  }
})
