const namespaced = true

const state = {
  loggedIn: false,
}

const getters = {
  loggedIn: state => state.loggedIn,
}

const actions = {
  login({ commit }) {
    commit('login')
  },
  logout({ commit }) {
    commit('logout')
  }
}

const mutations = {
  login (state) {
    state.loggedIn = true
  },
  logout (state) {
    state.loggedIn = false
  },
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
