<template>
  <div class="home">
    <img src="../assets/loading.gif" alt="" />
    <div style="width: 100%; text-align: center; margin: 10px 0"><router-link to="/about">去介绍页</router-link></div>
    <el-input style="width: 300px" v-model="num"></el-input>
    <div style="width: 100%; text-align: center; margin: 10px 0">{{ num }}</div>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  setup() {
    const num: Ref<string> = ref('hello vue3')
    return {
      num,
    }
  },
})
</script>

<style lang="scss">
.home {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    background-image: linear-gradient(rgb(95, 183, 255), rgb(242, 147, 255));
  }
}
</style>
