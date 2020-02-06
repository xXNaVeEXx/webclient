import axios from "axios";

const state = {
  locationinfo: {
    headerFullLocation: "Test"
  }
};

const getters = {
  getData: state => state.locationinfo
};
const actions = {
  async fetchData({ commit }) {
    const response = await axios.get(
      "https://api.foursquare.com/v2/venues/explore?client_id=JCLYYTPQGCRUCY4Z1TJMTYS0H0NN0Q2ZYLX0J5B1STFLACIH&client_secret=HQYHGN25DEWQGSKNQLI514TSN52XVEIPT5UC0FFRO5KDF4JQ&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee"
    );

    commit("setData", response.data);
  }
};
const mutations = {
  setData: (state, locationinfo) => (state.locationinfo = locationinfo)
};

export default {
  state,
  getters,
  actions,
  mutations
};
