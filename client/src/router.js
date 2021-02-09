import Vue from "vue";
import Router from "vue-router";
<<<<<<< HEAD

import LoginCheck from "./components/LoginCheck.vue";
=======
import List from "./components/List.vue";
import Main from "./components/Main.vue";
import Hello from "./components/HelloWorld.vue";
>>>>>>> dev

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
<<<<<<< HEAD
      {

        path: '/login_check',
        component: LoginCheck
      },
>>>>>>> upstream/dev
=======
       {
        path: '/list',
        component: List
      },
      {
        path: '/',
        component: Hello
      }, {
        path: '/main',
        component: Main
      }
>>>>>>> dev
  ]
});
