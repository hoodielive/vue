<template>
  <v-container
    id="social"
    tag="section"
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        xs12
        md4
      >
        <instagram />
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <newest-posts />
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <tags />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    components: {
      NewestPosts: () => import('@/components/NewestPosts'),
      Instagram: () => import('@/components/Instagram'),
      Tags: () => import('@/components/Tags')
    }
  }
</script>
