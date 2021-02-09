import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user'
import list from './modules/list'

Vue.use(Vuex); // Vue で使えるようにアクティベート

const store = new Vuex.Store({
  // NOTE: これを指定すると、mutations 以外で state を変更しようとした場合にコンソールでエラーを教えてくれる。
  strict: process.env.NODE_ENV !== 'production',
  // NOTE: これを指定すると、devtool で値の検証などができる。
  devtools: process.env.NODE_ENV !== 'production',
  modules: {
    user,
    list
  },
  // NOTE: このファイルでこれらが必要かどうかはよく分からない。
  /*
  state: {
    // state
  },
  mutations: {
    // mutations
  },
  actions: {
    // actions
  },
   */
});

export default store;
