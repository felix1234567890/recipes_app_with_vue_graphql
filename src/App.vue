<template>
  <v-app>
    <v-toolbar
      dark
      color="primary"
    >

      <v-toolbar-title class="white--text">Recipe's list</v-toolbar-title>

    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
