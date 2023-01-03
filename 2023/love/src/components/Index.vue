<script>
import { reactive, watchEffect, onMounted } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })
    watchEffect(() => console.log(state.count))
    onMounted(() => console.log('mounted!'))
    return {
      state,
      increment: () => { state.count++ }
    }
  }
}
</script>

<template>
  <button>{{ count }}</button>
</template>

<style scoped>
</style>
