import Vue from "vue";
import Router from "vue-router";

import LoginCheck from "./components/LoginCheck.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
      {

        path: '/login_check',
        component: LoginCheck
      },
>>>>>>> upstream/dev
  ]
});