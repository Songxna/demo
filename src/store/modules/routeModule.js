import { childRoutes } from '../../router/childRoutes';//前端路由
import {ruleRoutes} from '../../utils/ruleRoute'//匹配路由
import router,{baseRoutes} from '../../router/index'
import api from '../../api'
export default {
    namespaced: true,
    state: {
        menuList: [],//路由导航
    },
    mutations: {
        setMenuList(state, payload) {
            state.menuList = payload
        },
        clearMenuList(state) {
            state.menuList = []
        }
    },
    actions: {
        // 请求后台动态路由
        // 函数：promise  es6:async await
        async getActionsRoutes({commit,rootState}){
            // 1.获取后台动态路由
            // console.log(rootState);
            // console.log(rootState.loginModule.token);
            let routes=await api.getPermission({token:rootState.loginModule.token})
            console.log('--后台路由',routes.data.data);
            console.log('--前端路由',childRoutes);
            // 2.获取前端路由
            // 3.前后端路由匹配模式
            let menuArr=ruleRoutes(childRoutes,routes.data.data)
            console.log('符合规则的路由',menuArr);
            // 4.存储vuex
            commit('setMenuList',menuArr)
            // 5.获取基础路径 给layout 加动态路由
            let children=baseRoutes[0].children;//['layout/home']
            children.push(...menuArr);
            console.log(children);
            console.log('baseRoutes',baseRoutes);
            // 6.路由数组合并
            router.addRoutes(baseRoutes)
        }


        // getActionsRoutes({ commit, rootState }) {
        //     console.log(rootState.loginModule.token);
        //     api.getPermission({ token: rootState.loginModule.token }).then(res => {
        //         console.log(res);
        //         console.log('---h', res.data.data);
        //         console.log('---q', childRoutes);
        //     })
        // }
        
    }
}