import axios from "axios";

const state = {
  ip: "TestIP"
};
const getters = {
  getIP: state => state.ip
};
const actions = {
  async fetchIP({ commit }) {
    const response = await axios.get("https://api.ipify.org?format=json");
    const payload = {
      response: {
        ip: ""
      }
    };
    payload.response = response.data;
    window.console.log("in fetchip");
    window.console.log(payload);
    commit("setIP", payload);
  }
};
const mutations = {
  setIP: (state, ip) => (state.ip = ip)
};

export default {
  state,
  getters,
  actions,
  mutations
};
