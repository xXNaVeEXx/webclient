import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import foursquare from "./modules/foursquare";
import ipAPI from "./modules/ipAPI";
import locationAPI from "./modules/locationAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    foursquare,
    ipAPI,
    locationAPI
  }
});
