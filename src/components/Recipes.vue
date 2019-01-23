<template>
  <div>
    <ApolloQuery :query="require('@/graphql/queries/Recipes.gql')">
      <template slot-scope="{ result: { data },isLoading }">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          <v-layout mt-2>
            <v-flex
              xs12
              sm6
              offset-sm3
            >
              <div
                href="#"
                v-for="recipe of data.recipes"
                :key="recipe.id"
              >

                <v-card>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{recipe.title}}</h3>

                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <router-link
                      :to="`/${recipe.id}`"
                      tag="v-btn"
                      flat
                      color="orange"
                    >Show</router-link>
                  </v-card-actions>
                </v-card>

              </div>
              <router-link
                tag="v-btn"
                color="info"
                to="/recipe/add"
              >Add recipe</router-link>
            </v-flex>

          </v-layout>

        </div>

      </template>
    </ApolloQuery>

  </div>

</template>

<script>
import gql from "graphql-tag";
export default {
  name: "Recipes",

  data() {
    return {
      selectedRecipe: "First recipe"
    };
  },
  methods: {
    selectRecipe(recipe) {
      this.selectedRecipe = recipe;
    }
  }
  // apollo: {
  //   recipes: gql`
  //     {
  //       recipes {
  //         title
  //         ingredients
  //         directions
  //       }
  //     }
  //   `
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
