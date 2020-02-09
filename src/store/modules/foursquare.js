import axios from "axios";

const state = {
  locationinfo: {
    headerFullLocation: "Test",
    groups: [
      {
        type: "",
        name: "",
        items: [
          {
            referralId: "",
            reasons: {
              count: 0,
              items: [
                {
                  summary: "",
                  type: "",
                  reasonName: ""
                }
              ]
            },
            venue: {
              id: "",
              name: "",
              contact: {},
              location: {
                address: "",
                lat: 0,
                lng: 0,
                distance: 0,
                postalCode: 0,
                cc: "",
                city: "",
                state: "",
                country: "",
                formattedAddress: []
              },
              categories: [
                {
                  name: "",
                  pluralName: "",
                  shortName: "",
                  icon: {
                    prefix: "",
                    suffix: ""
                  },
                  primary: false
                }
              ],
              verified: false,
              stats: {
                tipCount: 0,
                usersCount: 0,
                checkinsCount: 0,
                visitsCount: 0
              },
              beenHere: {
                count: 0,
                lastCheckinExpiredAt: 0,
                marked: false,
                unconfirmedCount: 0
              },
              photos: {
                count: 0,
                groups: []
              },
              hereNow: {
                count: 0,
                summary: "",
                groups: []
              }
            }
          }
        ]
      }
    ]
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
  },
  async getLocalInformation({ commit }, payload) {
    const latitude = payload.latitude;
    const longitude = payload.longitude;
    const category = payload.category;
    const radius = payload.radius;
    const response = await axios.get(
      `https://api.foursquare.com/v2/venues/explore?client_id=JCLYYTPQGCRUCY4Z1TJMTYS0H0NN0Q2ZYLX0J5B1STFLACIH&client_secret=HQYHGN25DEWQGSKNQLI514TSN52XVEIPT5UC0FFRO5KDF4JQ&v=20180323&limit=${radius}&ll=${latitude},${longitude}&query=${category}`
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
