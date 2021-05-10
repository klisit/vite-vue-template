<!--
 * @Description: string
 * @Author: klisit
 * @Date: 2021-04-22 23:08:31
 * @LastEditTime: 2021-04-27 08:58:48
 * @LastEditors: klisit
-->
<template>
  <div class="aside-bar">
    <div class="collapse-icon" @click="handleCollapse">
      <i :class="{ 'el-icon-s-unfold': isCollapse, 'el-icon-s-fold': !isCollapse }"></i>
    </div>
    <el-menu
      class="aside-menu"
      :default-active="currentRoute"
      router
      unique-opened
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>基本信息</span>
        </template>
        <el-menu-item-group>
          <template #title>服务器性能</template>
          <el-menu-item index="/home">控制板</el-menu-item>
          <el-menu-item index="/about">数据监控</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-1">
          <template #title>选项4</template>
          <el-menu-item index="1-1-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/test1">
        <i class="el-icon-menu"></i>
        <template #title>测试1</template>
      </el-menu-item>
      <el-menu-item index="/test2">
        <i class="el-icon-document"></i>
        <template #title>测试2</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>设置</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { ElMenu, ElSubmenu, ElMenuItemGroup, ElMenuItem } from 'element-plus'

export default defineComponent({
  name: 'AsideBar',
  components: {
    ElMenu,
    ElSubmenu,
    ElMenuItemGroup,
    ElMenuItem,
  },
  setup() {
    let $route = useRoute()
    let isCollapse: Ref<Boolean> = ref(true)
    return {
      isCollapse,
      currentRoute: computed(() => $route.path),
      handleCollapse() {
        isCollapse.value = !isCollapse.value
      },
      handleOpen() {
        console.log(arguments)
        // to do something
      },
      handleClose() {
        console.log(arguments)
        // to do something
      },
    }
  },
})
</script>
<style lang="scss">
.collapse-icon {
  width: 100%;
  height: 60px;
  background-color: #2f9aff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aside-menu {
  height: calc(100vh - 60px);
}
.aside-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
