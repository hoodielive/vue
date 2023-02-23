<template>
   <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Iku</span>
            <span>Organization</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="white">
            <span>Sign Out</span>
            <v-icon right>mdi-login-variant</v-icon>
        </v-btn>
    </v-toolbar>
   </nav>
</template>

<script>
export default {
    data () {
      return {
        drawer: true
      }
    }
}
</script>
