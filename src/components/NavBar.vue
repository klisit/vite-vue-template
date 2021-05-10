<!--
 * @Description: string
 * @Author: klisit
 * @Date: 2021-04-22 11:23:58
 * @LastEditTime: 2021-04-22 17:59:02
 * @LastEditors: klisit
-->
<template>
  <div class="nav-bar">
    <router-link v-for="(item, index) of visitedViews" :key="item.fullPath" :to="item.fullPath" class="nav-item" active-class="active">
      <p>{{ item.title }}</p>
      <i v-show="lockIndex(index)" class="el-icon-circle-close" @click.prevent="removeView(index)"></i>
    </router-link>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'NavBar',
  setup() {
    const $store = useStore()
    const $router = useRouter()
    const $route = useRoute()
    const visitedViews = computed(() => $store.state.visitedViews)
    const removeView = (index) => {
      let currentPath = visitedViews.value[index].fullPath
      $store.dispatch('reomveView', index)
      if ($route.fullPath == currentPath) {
        $router.replace(visitedViews.value[index - 1].fullPath)
      }
    }

    return {
      removeView,
      visitedViews,
      lockIndex: (index) => index > 0,
    }
  },
})
</script>
<style lang="scss">
.nav-bar {
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 5px 2px 0 2px;
  border-bottom: 2px solid rgb(47, 154, 255);
  display: flex;
  overflow: hidden;
  .nav-item {
    position: relative;
    min-width: 100px;
    width: 200px;
    margin: 0 0 0 5px;
    padding: 10px 20px;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0;
    }
  }
  .active {
    color: #fff;
    background-color: rgb(47, 154, 255);
    box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
    z-index: 9;
  }
}
</style>
