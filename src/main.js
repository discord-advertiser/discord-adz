import Vue from "vue";
import App from "./App.vue";
import router from "./router";
const axios = require("axios");
const { APIKEY } = require("../config.json");

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        Authorization: APIKEY
      }
    };
  },
  error => Promise.reject(error)
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
