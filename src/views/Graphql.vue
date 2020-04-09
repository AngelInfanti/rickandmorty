<template>
  <div class="container">
    <transition name="slide-fade">
      <Loader v-if="$apollo.loading"></Loader>
    </transition>
    <transition name="fade">
      <Characters :characters="characters"></Characters>
    </transition>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Characters from "@/components/Characters.vue";
import gql from "graphql-tag";
export default {
  name: "graphql",
  components: {
    Loader,
    Characters,
  },
  data: function() {
    return {};
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    characters: gql`
      query {
        characters(page: 1, filter: { name: "" }) {
          info {
            count
          }
          results {
            id
            name
            image
            origin {
              id
              name
              type
              dimension
            }
          }
        }
        character(id: 1) {
          id
        }
      }
    `,
  },
};
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity 1s;
  transition-delay  1s;

.fade-enter, .fade-leave-to
  opacity: 0;

.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
