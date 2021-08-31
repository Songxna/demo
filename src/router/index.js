import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Layout from '../views/Layout/Layout.vue'
import Login from '../views/Login/Login.vue'
import Error from '../views/Error/404.vue'





Vue.use(VueRouter)
//编程式导航：重复点击一个路由 报错
//解决方式：1.降低路由版本 3.0.7  2.重写路由的js文件
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 基础路由
export const baseRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: {//配置meta元信息  配给父元素
      isLogin: true
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {//标识匹配
          name: '首页',
          icon: "icon-home"
        }
      }
    ]
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

// 路由

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})



export default router
