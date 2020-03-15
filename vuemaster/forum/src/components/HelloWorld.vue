<template>
<div>
  <h1>Welcome to the Forum</h1>
  <ThreadList />
</div>
</template>

<script>
import sourceData from '@/data'

console.log(sourceData)
export default {
  name: 'HelloWorld',
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
