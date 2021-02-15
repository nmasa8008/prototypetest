import Vue from "vue";
import Router from "vue-router";

import List from "./components/List.vue";
import Main from "./components/Main.vue";
import Hello from "./components/HelloWorld.vue";
import Devicelist from "./components/DeviceList.vue";
import DeviceEntry from "./components/DeviceEntry.vue";

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
      path: "/DeviceList",
      component: Devicelist,
    },
    {
      path: "/DeviceEntry",
      component: DeviceEntry,
    },
  ],
});
