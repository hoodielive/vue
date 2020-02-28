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
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light">
            The Iku Organization
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Turning the heart of sons back to their fathers
          </div>
          <v-btn
            color="primary"
            depressed
            round
          >
            Join
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>
