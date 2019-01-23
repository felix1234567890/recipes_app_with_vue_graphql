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
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
