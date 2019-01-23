import Vue from "vue";
import "./plugins/vuetify";
import VueRouter from "vue-router";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import router from "./router";
import Vuetify from "vuetify";
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);
new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount("#app");
