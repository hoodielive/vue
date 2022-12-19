<template>
  <div>
    <egun-navbar />
    <egun-hero />   
    <egun-post />
    <egun-pagination />
  </div>
</template>

<script>
import EgunNavbar from "./components/EgunNavbar.vue";
import EgunHero from "./components/EgunHero.vue"
import EgunPost from "./components/EgunPost.vue"
import EgunPagination from "./components/EgunPagination.vue"

export default {
  name: 'App',
  components: {
    EgunNavbar,
    EgunHero,
    EgunPost,
    EgunPagination,
  }
}
</script>

<style lang="scss">
   @import 'assets/styles/variables.scss';
   @import '~bulma/bulma.sass';
   @import 'assets/styles/main.scss';
</style>

