import VueRouter from 'vue-router'

var routes = [
  {
    path: '/login',
    component: require('./components/login')
  },
  {
    path: '/register',
    component: require('./components/register')
  },
  {
    path: '/create',
    component: require('./components/create')
  },
  {
    path: '/allcards',
    component: require('./components/cards-list')
  },
  {
    path: '/about',
    component: require('./components/about')
  }
]

/* eslint-disable no-new */
export default new VueRouter({
  routes
})
