import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import "@/router";
import router from "./router";

//Librerias instaladas
import Chart from "chart.js";
import Chartkick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
