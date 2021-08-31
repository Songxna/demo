<template>
  <div class="slidenav">
      <el-menu
      :default-active="$route.name"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <Mymenmu :menuList='childRoutes'/>
      </el-menu>
  </div>
</template>

<script>
import Mymenmu from "@/components/Mymenmu.vue";
// import {childRoutes} from '../../../router'//前台定义的全路由配置
import {mapState} from 'vuex'//vuex存储的动态路由
import {baseRoutes} from '../../../router'
export default {
    data(){
        return{
            childRoutes:baseRoutes[0].children
        }
    },
    computed:{
      ...mapState('routeModule',['menuList'])
    },
  components: {
    Mymenmu,
  },
  mounted(){
      // console.log(childRoutes);//[{home},..]
  }
};
</script>

<style scoped lang='scss'>
.slidenav {
  background: #545c64;
  height: 100%;
  width: 200px;
}
</style>