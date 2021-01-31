import Vue from "vue";
import Vuex from "vuex";
import test from './modules/test'

Vue.use(Vuex); // Vue で使えるようにアクティベート

const store = new Vuex.Store({
    modules: {
        test
      },
});

export default store;