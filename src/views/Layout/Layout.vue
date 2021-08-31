<template>
  <div class="layout">
    <Slidebar/>
    <Miancontent/>
  </div>
</template>

<script>
import Slidebar from './slidebar-nav'
import Miancontent from './mian-content'
export default {
components:{
  Slidebar,//侧边导航
  Miancontent,//右边内容
}
}
</script>

<style lang="scss" scoped>
.layout{
  display: flex;
  height: 100%;
}
</style>