// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'
// import VueYoutubeEmbed from 'vue-youtube-embed'
import Playlist from './components/Playlist'
import store from './store'

Vue.use(VueResource)
Vue.use(VueTouch)
Vue.use(VueRouter)
// Vue.use(VueYoutubeEmbed)

// Vue.http.interceptors.push((request, next) => {
//   // modify request
//   request.header = {}
//
//   // continue to next interceptor
//   next()
// })

var router = new VueRouter({
  routes: [{
    path: '/',
    component: Playlist
  }]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
