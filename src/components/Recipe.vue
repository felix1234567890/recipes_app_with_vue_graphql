<template>
  <div>
    <ApolloQuery
      :query="require('@/graphql/queries/Recipe.gql')"
      :variables="{title:
      $route.params.title}"
    >
      <template slot-scope="{ result: { data },isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <v-layout mt-2>
            <v-flex
              xs12
              sm6
              offset-sm3
            >
              <v-card>

                <v-container
                  fill-height
                  fluid
                >
                  <v-layout fill-height>
                    <v-flex
                      xs12
                      align-end
                      flexbox
                    >
                      <span class="headline">{{data.recipe.title}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card-title>
                  <div>
                    <h3 class="grey--text">Ingredients:{{data.recipe.ingredients}}</h3><br>
                    <h3 class="grey--text">Directions:{{data.recipe.directions}}</h3><br>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <router-link
                    to="/"
                    tag="v-btn"
                  >Back</router-link>
                  <router-link
                    :to="`/recipe/edit/${data.recipe.title}`"
                    tag="v-btn"
                  >Edit</router-link>
                  <v-btn
                    color="warning"
                    @click.prevent="deleteRecipe"
                  >Delete</v-btn>

                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>

        </div>
      </template>
    </ApolloQuery>

  </div>

</template>

<script>
import DeleteRecipe from "../graphql/mutations/DeleteRecipe.gql";
export default {
  name: "Recipe",
  methods: {
    deleteRecipe() {
      this.$apollo
        .mutate({
          mutation: DeleteRecipe,
          variables: {
            title: this.$route.params.title
          }
        })
        .then(data => this.$router.push("/"));
    }
  }
};
</script>

<style>
</style>
