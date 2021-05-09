<template>
  <p>
    <router-link to="/home">首页</router-link>
    ｜
    <router-link to="/about">关于</router-link>
  </p>
  <el-button>按钮</el-button>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup: () => {
    /*输出版本戳 */
    console.log(
      '%c%s%c%s',
      'padding:2px 5px;border-radius:4px 0px 0px 4px;color:#fff;background:#4072b7',
      import.meta.env.VITE_APP_NAME,
      'padding:2px 5px;border-radius:0px 4px 4px 0px;color:#333;background:#fff',
      import.meta.env.VITE_APP_VERSION
    )

    return {}
  },
})
</script>

<style lang="sass">
#app
	font-family: Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	margin-top: 60px

a
	color: #42b983
</style>
