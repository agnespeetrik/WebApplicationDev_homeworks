import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  posts: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          commit('SET_POSTS', response.data)
        })
  }
}

//to handle mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})