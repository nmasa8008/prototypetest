import Vue from "vue";
import Router from "vue-router";
import DeviceList from "./components/DeviceList.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
      {
        path: '/Devicelist',
        component: DeviceList
      }

  ]
});