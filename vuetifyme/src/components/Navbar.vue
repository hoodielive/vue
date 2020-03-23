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
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
