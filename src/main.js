import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vueResource from "vue-resource";
import About from "./components/About.vue";
import Customers from "./components/Customers.vue";
import Contact from "./components/Contact.vue";
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(vueResource);
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Customers },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
  ],
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
