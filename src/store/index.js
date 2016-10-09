import Vue from 'vue'
import Vuex from 'Vuex'
import playlist from './module/playlist'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters, // Can export here actions too
  modules: {
    playlist
  },
  strict: true
})
