import axios from "axios";

const state = {
  data: {
    geo: {
      latitude: 0,
      longitude: 0
    }
  }
};
const getters = {
  getLocation: state => state.data
};
const actions = {
  async fetchLocation({ commit }, ip) {
    const response = await axios.get(
      `https://tools.keycdn.com/geo.json?host=${ip}`
    );

    commit("setLocation", response.data);
  }
};
const mutations = {
  setLocation: (state, data) => (state.data = data)
};

export default {
  state,
  getters,
  actions,
  mutations
};
