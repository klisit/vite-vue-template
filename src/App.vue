<template>
  <component :is="layout">
    <router-view v-if="isRouterAlive"></router-view>
  </component>
</template>
<script lang="ts">
import { defineComponent, computed, nextTick, provide } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'App',
  setup() {
    /*输出版本戳 */
    console.log(
      '%c%s%c%s',
      'padding:2px 5px;border-radius:4px 0px 0px 4px;color:#fff;background:#4072b7',
      import.meta.env.VITE_APP_NAME,
      'padding:2px 5px;border-radius:0px 4px 4px 0px;color:#333;background:#fff',
      import.meta.env.VITE_APP_VERSION
    )
    const $route = useRoute()
    let defaultLayout = 'default'
    let isRouterAlive = true
    function reload() {
      isRouterAlive = false
      nextTick(() => {
        isRouterAlive = true
      })
    }
    provide('reload', reload)
    return {
      layout: computed(() => {
        return `${$route.meta.layout || defaultLayout}-layout`
      }),
      defaultLayout,
      isRouterAlive,
    }
  },
})
</script>
