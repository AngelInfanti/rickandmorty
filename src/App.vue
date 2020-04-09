<template>
  <div id="app" class="app">
    <h1 class="font-rickmorty tittle mb-5">Angel Infanti</h1>
    <!-- <div id="nav">
      <router-link to="/"><h1 class="font-rickmorty">Graphql</h1></router-link>
      |
      <router-link to="/about"
        ><h1 class="font-rickmorty">Abbout</h1></router-link
      >
    </div> -->

    <router-view />
  </div>
</template>

<style lang="stylus">
.tittle
    color: black;
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
