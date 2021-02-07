import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from "./router";
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' //追加
import 'bootstrap-vue/dist/bootstrap-vue.css' //追加
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(BootstrapVue) //追加
Vue.use(IconsPlugin) //追加
Vue.use(VueGoodTablePlugin) //追加
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
