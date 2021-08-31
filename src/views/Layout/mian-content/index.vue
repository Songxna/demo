<template>
  <div class="main-content">
      <TopNav/>
      <Container/>
  </div>
</template>

<script>
import TopNav from "./topNav.vue";
import Container from "./container.vue";
export default {
  components: {
    TopNav,//顶部
    Container,//内容
  },
};
</script>

<style lang="scss" scoped>
.main-content{
    flex: 1;
}
</style>