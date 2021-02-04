import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";
import LoginCheck from "./components/LoginCheck.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
      {
        path: '/list',
        component: List
      },
      {
        path: '/login_check',
        component: LoginCheck
      },
  ]
});