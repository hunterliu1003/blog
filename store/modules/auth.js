import { auth } from '@/services/fireinit.js'

const state = {
  user: null
}
const mutations = {
  setUser (state, payload) { state.user = payload }
}
const actions = {
  signInWithEmail ({ commit }, payload) {
    return auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => user)
  },
  signOut ({ commit }) {
    return auth.signOut()
      .then(() => {
        commit('setUser', null)
      })
  },
  signInAuto ({ commit }) {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => {
        if (user) {
          commit('setUser', user)
        }
        resolve(user)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}