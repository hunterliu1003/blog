import { auth } from '@/plugins/firebase'

export const state = {
  user: null
}
export const mutations = {
  setUser (state, payload) { state.user = payload }
}
export const actions = {
  signInWithEmail ({ commit }, payload) {
    return auth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => ({ ...user, status: 'success' }))
      .catch(e => ({ ...e, status: 'error' }))
  },
  signOut ({ commit }) {
    return auth.signOut()
      .then(() => {
        commit('setUser', null)
      })
  },
  signInAuto ({ commit }) {
    return new Promise(resolve => {
      auth.onAuthStateChanged(user => {
        if (user) {
          commit('setUser', user)
        }
        resolve(user)
      })
    })
  }
}
export const getters = {
  authenticated (state) {
    return !!state.user
  }
}