import Vue from "vue";
import Vuex from "vuex";
import list from './modules/list'

Vue.use(Vuex); // Vue で使えるようにアクティベート

const store = new Vuex.Store({
    modules: {
        list
      },
});

export default store;