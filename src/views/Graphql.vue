<template>
  <div class="container">
    <div class="col-md-12">
      <h1 class="font-rickmorty tittle mb-1">Rick AND Morty</h1>
    </div>
    <transition name="slide-fade">
      <Loader v-if="$apollo.loading"></Loader>
    </transition>
    <transition name="fade">
      <Characters :characters="characters" v-if="!$apollo.loading"></Characters>
    </transition>
    <transition name="fade">
      <Pagination v-show="!$apollo.loading" @click="handlePage"></Pagination>
    </transition>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Characters from "@/components/Characters.vue";
import Pagination from "@/components/Pagination.vue";
import gql from "graphql-tag";
export default {
  name: "graphql",
  components: {
    Loader,
    Characters,
    Pagination
  },
  data: function() {
    return {
      page: 1
    };
  },

  apollo: {
    characters: {
      // GraphQL Query
      query: gql`
        query getCharacters($page: Int!) {
          characters(page: $page, filter: { name: "" }) {
            info {
              count
            }
            results {
              id
              name
              image
            }
          }
          character(id: 1) {
            id
          }
        }
      `,
      // Reactive variables
      variables() {
        return {
          page: this.page
        };
      }
    }
  },
  methods: {
    handlePage(page) {
      this.page = page;
    }
  }
};
</script>

<style lang="stylus" scoped>

.fade-enter-active
  transition: opacity 1s;
  transition-delay  1s;

.fade-enter
  opacity: 0;



.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  opacity: 0;
}
</style>
