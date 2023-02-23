<template>
  <div class="home">
    <Apply msg="Hey Howdy Ho There!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Apply from '@/components/Apply.vue'

export default {
  name: 'Home',
  components: {
    Apply
  }
}
</script>
