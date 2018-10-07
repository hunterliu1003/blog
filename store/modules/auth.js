import { auth } from '@/services/fireinit.js'

export const state = {
  user: null
}
export const mutations = {
  setUser (state, payload) { state.user = payload }
}
export const actions = {
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
