// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'
// import VueResource from 'vue-resource'
// import axios from 'axios'

import app from './App'
import router from './routes'

Vue.use(VueRouter)
// Vue.use(axios)
Vue.use(VueCookie)
// Vue.use(VueResource)
// Vue.use(axios)
// window.axios = axios

// window.axios.defaults.headers.common = {
//   'X-Requested-With': 'XMLHttpRequest'
// }

// Vue.prototype.$axios = axios
// Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app :authenticated="authenticated"></app>',
  components: {
    app
  },
  data () {
    return {
      authenticated: false
    }
  },
  mounted () {
    if (this.$cookie.get('user')) {
      console.log(this.authenticated)
      this.authenticated = true
    }
  },
  router
})
