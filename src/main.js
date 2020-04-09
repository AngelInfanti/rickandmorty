import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueApollo from "vue-apollo";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "./assets/css/main.styl";
import "./plugins";

Vue.use(VueApollo);

Vue.use(VueAwesomeSwiper);

import apolloClient from "./api/index";
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
