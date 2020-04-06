<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading >
      <h4>About Us</h4>
    </base-subheading>
    <p>
      The Iku Organization are men restoring masculinity. This organization exists to restore rights of passage with an emphasis on teaching young men how to fish, hunt, handle firearms safely and more. We are a community oriented and can be seen helping the elderly, widows and orphans. If you are interested in joining our effort, please join now. If you would like to contribute, please donate. Thank you for stopping by.
    </p>

    <br>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row
            :align="alignment"
            :justify="justify"
            class="ma-3 pa-6"
            outlined
            tile
          >

        <v-img

          class="white--text align-end"
          src="../../assets/articles/hunting01.jpg"
        >
        <v-card-title>Hunting</v-card-title>
        </v-img>
        <v-card-text class="text--primary">
          <div>Hunting is fun.</div>
          <div>Howe, Texas</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="orange"
            text
          >
            Share
          </v-btn>
          <v-btn
            color="orange"
            text
          >
            More
          </v-btn>
        </v-card-actions>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-card
    class="mx-auto"
    max-width="400"
    >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../../assets/articles/hunting01.jpg"
    >
    <v-card-title>Hunting</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div>Hunting is fun.</div>
      <div>Howe, Texas</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>
      <v-btn
        color="orange"
        text
      >
        More
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<style scoped>
  h4 {
    text-align: center;
  }

</style>
