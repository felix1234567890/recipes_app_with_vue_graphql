<template>
  <div>

    <v-container>
      <h1>Edit a recipe</h1>
      <v-form @submit.prevent="editRecipe">
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
          Edit
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
import Recipe from "../graphql/queries/Recipe.gql";
import EditRecipe from "../graphql/mutations/EditRecipe.gql";
export default {
  data: () => ({
    title: "",
    ingredients: "",
    directions: "",
    published: false
  }),
  apollo: {
    recipe: {
      query: Recipe,
      variables() {
        return { id: this.$route.params.id };
      },
      result({ data, loading, networkStatus }) {
        this.title = data.recipe.title;
        this.ingredients = data.recipe.ingredients;
        this.directions = data.recipe.directions;
      }
    }
  },
  methods: {
    async editRecipe() {
      if (
        this.title !== "" &&
        this.ingredients !== "" &&
        this.directions !== ""
      ) {
        await this.$apollo
          .mutate({
            mutation: EditRecipe,
            variables: {
              id: this.$route.params.id,
              title: this.title,
              ingredients: this.ingredients,
              directions: this.directions,
              published: this.published
            }
          })
          .then(data => {
            // Result
            console.log(data);
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
