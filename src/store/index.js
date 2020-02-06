import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import foursquare from "./modules/foursquare";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    foursquare
  }
});
