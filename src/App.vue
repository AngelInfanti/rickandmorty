<template>
  <div id="app" class="app">
    <!-- <div id="nav">
      <router-link to="/"><h1 class="font-rickmorty">Graphql</h1></router-link>
      |
      <router-link to="/about"
        ><h1 class="font-rickmorty">Abbout</h1></router-link
      >
    </div> -->

    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/layouts/Footer";
export default {
  components: { Footer }
};
</script>

<style lang="stylus">
.tittle
    font-size: 80px;
    -webkit-text-fill-color: #16ACC9; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    text-shadow: 3px 3px 3px #C9D149;

.app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px


body
  background: url(./assets/images/portal-wallpaper.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
</style>
