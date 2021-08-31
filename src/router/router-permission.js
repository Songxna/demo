import store from '../store'
import router from './index'
import Element from 'element-ui'
// 全局守卫
router.beforeEach((to, from, next) => {
    // 进入守卫--判断是否有token
    if (!store.state.loginModule.token) {
        if (to.matched.length > 0 && !to.matched.some(item => item.meta.isLogin)) {//判断是否需要登录
            // 不需要--跳转
            next();
        } else {//需要登录
            next('/login')
        }
    } else { //登陆过信息存在 token  1.没有本地导航数据  2.有导航存储
        console.log('登录了');
        if (store.state.routeModule.menuList.length <= 0) {
            console.log('没有导航');
            // 请求动态路由
            store.dispatch('routeModule/getActionsRoutes').then(res=>{
               next({
                   path:to.path
                }) 
            })
            // next()
        } else {
            console.log('有导航');
            // 判断 是否已登录
            if(to.path!=='/login'){
                next()
            }else{
                Element.Message.error('您已登录！')
                next(from.path)
            }
        }

    }

    // 判断进入当前页面是否需要登录   js:some() 遍历数组 找到满足条件的数据 返回true 不会监测空数组 
    // if (to.matched.some(record => record.meta.isLogin)) {
    //     let token = store.state.loginModule.token;//已登录
    //     if (token) {
    //         next()
    //     } else {
    //         next('/login')//跳转登录
    //     }
    // } else {
    //     next()//不需要登录
    // }


})