<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="require('@/assets/articles/theikuorg.jpg')"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
        text-xs-center
        >
          <h1 class="display-2 font-weight-dark">
            THE IKU ORGANIZATION
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Turning the heart of sons back to their fathers
          </div>
          <router-link to="./Apply">
            <v-btn
              color="primary"
              depressed
              round
            >
              Join
            </v-btn>
          </router-link*
          <v-btn
            color="secondary"
            depressed
            round
          >
            Login
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>

<script>
export default {
  components: {
      Apply: () => import('@/components/home/Apply')
  }
}


</script>
