<template>
  <div class="container">
    <div class="col-md-12">
      <h1 class="font-rickmorty tittle mb-1">Rick AND Morty</h1>
    </div>
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-md-6">
        <div class="form-group">
          <input
            autocomplete="off"
            class="form-control text-center"
            type="text"
            v-model="search"
            placeholder="Search Caracter for name"
            id="search"
          />
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <Loader v-if="$apollo.loading"></Loader>
    </transition>
    <transition name="fade">
      <Characters
        :characters="filters"
        :search="search"
        v-if="!$apollo.loading"
      ></Characters>
    </transition>
    <transition name="fade">
      <Pagination
        v-show="!$apollo.loading"
        @click="handlePage"
        :page="characters.info.pages"
      ></Pagination>
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
      page: 1,
      search: ""
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
              pages
            }
            results {
              id
              name
              image
            }
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
  computed: {
    filters() {
      let filter = new RegExp(this.search, "i");
      let result = this.characters.results.filter(el => el.name.match(filter));
      return result;
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
