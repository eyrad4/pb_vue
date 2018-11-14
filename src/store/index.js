import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API = 'https://jsonplaceholder.typicode.com/'

const URL  = {
  search: API + 'posts'
}

export default new Vuex.Store({
  state: {
    searchResults: ''
  },
  mutations: {
    setSearchResults(state, params) {   
      state.searchResults = params
    }
  },
  actions: {
    search({commit}, params) {
      axios.get(URL.search + '?search=' + params.search).then(response => (
        commit('setSearchResults', response.data)
      ))
    },
    clearSearch({commit}) {
      commit('setSearchResults','')
    }
  }
})

