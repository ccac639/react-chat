import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToastify from "vue-toastify";
import Notifications from "vue-notification";
import "normalize.css/normalize.css";
import "./index.scss";
import axios from "axios";

Vue.use(Notifications);
Vue.config.productionTip = false;
import "@icon-park/vue/styles/index.css";

Vue.use(VueToastify, {
  position: "bottom-right",
  canPause: false,
  lightTheme: false,
  theme: "light"
});
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
