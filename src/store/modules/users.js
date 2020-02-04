const state = {
  users: [
    {
      name: "Gamzat",
      email: "test@gmail.de",
      adresse: "diesestraße 45"
    },
    {
      name: "Gamzat2",
      email: "test@gmail.de",
      adresse: "diesestraße 45"
    },
    {
      name: "Gamzat3",
      email: "test@gmail.de",
      adresse: "diesestraße 45"
    }
  ]
};
const getters = {
  getUsers: state => state.users
};
const actions = {};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
