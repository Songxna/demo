import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/base.css'
import './router/router-permission'

Vue.config.productionTip = false

// 获取本地存储
let token =localStorage.getItem('token')
if(token){
  store.commit('loginModule/setToken',token)
}



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
