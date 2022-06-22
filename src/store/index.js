import Vue from 'vue';
import Vuex from 'vuex';
import {member} from "./member";
import {auth} from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    error: false
  },
  mutations: {
    LOADING(state, payload){
      state.loading = payload
    },
    ERROR(state, payload){
      state.error = payload
    }
  },
  actions: {
  },
  modules: {
    member,
    auth
  },
});
