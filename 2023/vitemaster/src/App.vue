<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
<<<<<<< HEAD:2023/withvite/src/App.vue
    <div class="wrapper">
      <nav>
        <h1></h1>
=======
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it, it was you!! Ah yeah, it was you!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
>>>>>>> cdf051aa658d76a02c067b6530b7460a4d94b381:2023/vitemaster/src/App.vue
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
