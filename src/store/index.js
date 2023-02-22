import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname:sessionStorage.getItem('uname')
  },
  getters: {
  },
  mutations: {
    updateUname(state,uname){
      state.uname = uname 
      sessionStorage.setItem('uname',uname)
    }
  },
  actions: {
  },
  modules: {
  }
})
