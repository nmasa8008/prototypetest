import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";
import Main from "./components/Main.vue";
import Hello from "./components/HelloWorld.vue";
import PJList from "./components/PJ-List.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/list",
      component: List,
    },
    {
      path: "/",
      component: Hello,
    },
    {
      path: "/main",
      component: Main,
    },
    {
      path: "/pj-list",
      component: PJList,
    },
  ],
});
