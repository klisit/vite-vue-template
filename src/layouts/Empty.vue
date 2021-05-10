<template>
  <div class="empty">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Empty',
})
</script>
