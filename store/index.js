import Vuex from 'vuex'
import modules from '@/store/modules'

const createStore = () => {
  return new Vuex.Store({
    modules
  })
}

export default createStore