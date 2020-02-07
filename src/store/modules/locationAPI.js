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
    window.console.log("log ip in fetchlocation");

    const response = await axios.get(
      `https://tools.keycdn.com/geo.json?host=${ip}`
    );
    window.console.log("in fetchLocation");
    window.console.log(response.data.data.geo);
    const payload = {
      data: {
        geo: {
          latitude: 0,
          longitude: 0
        }
      }
    };
    payload.data = response.data.data;
    window.console.log("payload");
    window.console.log(payload);
    commit("setLocation", payload);
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
