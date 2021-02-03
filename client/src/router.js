import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";
import RegisterPhoto from "./components/RegisterPhoto.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
      {
        path: '/list',
        component: List
      },
      {
        path: '/register_photo',
        component: RegisterPhoto
      }

  ]
});