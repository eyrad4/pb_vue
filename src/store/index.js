import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API = 'https://jsonplaceholder.typicode.com/'
const API2 = 'https://api.punkapi.com/v2/'

const URL  = {
  search: API + 'posts',
  items2: API + 'albums',
  items: API2 + 'beers',
  file: 'http://zohocrm/upload.php'
}

const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export default new Vuex.Store({
  state: {
    searchResults: '',
    fileDownload: '',
    itemsResult: []
  },
  mutations: {
    setSearchResults(state, params) {   
      state.searchResults = params
    },
    setFileDownload(state, params) {
      state.fileDownload = params.tmp_name
    },
    setItemsResult(state, params) {
      for(let index in params) {
         state.itemsResult.push(params[index])  
      }
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
    },
    sendFile({commit}, params) {
      let data = new FormData()
      data.append('file', params.file)
      axios.post(URL.file, data, headers).then(response => (
        commit('setFileDownload', response.data)
      ))
    },
    getItems({commit}, params) {
      axios.get(URL.items + '?page=' + params.page + '&per_page=' + params.perPage, headers).then(response => (
        commit('setItemsResult', response.data)
      ))
    }
  }  
})

