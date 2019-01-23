<template>
  <div>

    <v-container>
      <h1>Add a recipe</h1>
      <v-form @submit.prevent="addRecipe">
        <v-text-field
          name="title"
          v-model="title"
          :counter="20"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          name="ingredients"
          v-model="ingredients"
          label="Ingredients"
          required
        ></v-text-field>
        <v-text-field
          name="directions"
          v-model="directions"
          label="Directions"
          required
        ></v-text-field>

        <v-btn
          type="submit"
          color="primary"
        >
          Add
        </v-btn>
        <router-link
          to="/"
          tag="v-btn"
          color="info"
        >
          Home
        </router-link>
      </v-form>
    </v-container>

  </div>

</template>

<script>
import gql from "graphql-tag";
import AddRecipe from "../graphql/mutations/AddRecipe.gql";
export default {
  data: () => ({
    title: "",
    ingredients: "",
    directions: "",
    published: false
  }),
  methods: {
    addRecipe() {
      if (
        this.title.trim() !== "" &&
        this.ingredients.trim() !== "" &&
        this.directions.trim() !== ""
      ) {
        this.$apollo
          .mutate({
            mutation: AddRecipe,
            variables: {
              title: this.$data.title,
              ingredients: this.$data.ingredients,
              directions: this.$data.directions,
              published: this.$data.published
            }
          })
          .then(data => {
            // Result
            this.$router.push("/");
          })
          .catch(error => {
            // Error
            console.error(error);
            // We restore the initial user input
          });
      }
    }
  }
};
</script>

<style>
</style>
