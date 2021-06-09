<template>
  <el-container class="default">
    <el-aside width="auto">
      <AsideBar></AsideBar>
    </el-aside>
    <el-container>
      <el-header>{{ title }}</el-header>
      <el-main class="workspace">
        <NavBar></NavBar>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive v-if="route.meta.keepAlive" :include="catchedViews">
              <component :is="Component" />
            </keep-alive>
          </transition>
          <component :is="Component" v-if="!route.meta.keepAlive"></component>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMain, ElContainer, ElHeader, ElAside } from 'element-plus'
import NavBar from '@/components/NavBar.vue'
import AsideBar from '@/components/AsideBar.vue'
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    ElMain,
    ElContainer,
    ElHeader,
    ElAside,
    NavBar,
    AsideBar,
  },
  setup() {
    let $store = useStore()
    let $route = useRoute()
    useRouter().beforeEach((to, from, next) => {
      $store.dispatch('addView', to)
      next()
    })
    let catchedViews = computed(() => $store.getters.catchedViews)
    return {
      title: computed(() => $route.meta.title),
      catchedViews,
    }
  },
})
</script>

<style lang="scss">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.4s ease;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.default {
  .workspace {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .el-aside {
    height: 100vh;
  }
  .el-header {
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #b3c0d1;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
