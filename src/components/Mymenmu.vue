<template>
  <div>
    <template v-for="(item, index) in menuList">
      <!-- 有下拉 -->
      <el-submenu
        :index="item.name"
        :key="index"
        v-if="item.children && item.children.length > 0"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item-group>
          <!-- 再遍历children -->
          <my-menu :menuList="item.children"></my-menu>
        </el-menu-item-group>
      </el-submenu>
      <!-- 没有下拉 -->
      <el-menu-item
        :index="item.name"
        :key="index"
        @click="goPage(item.name)"
        v-else
      >
        <i class="iconfont" :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "my-menu",
  props: {
    menuList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    //
    goPage(name) {
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style>
</style>