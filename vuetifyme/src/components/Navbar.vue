<template>
   <nav>
    <v-toolbar flat dark app>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Iku</span>
            <span>Organization</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="grey">
            <span>Sign Out</span>
            <v-icon right>mdi-login-variant</v-icon>
        </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
        <p>test</p>

    </v-navigation-drawer>
   </nav> 
</template>

<script>
export default {
    data() => {
        drawer: false
    }
}
</script>