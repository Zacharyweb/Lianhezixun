import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Found from '@/views/Found'
import Mine from '@/views/Mine'
import SearchResult from '@/views/SearchResult'
import SignIn from '@/views/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/sign',
      name: 'Sign',
      component: SignIn
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchResult
    },
  ]
})
