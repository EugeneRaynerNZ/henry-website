import Vue from 'vue'
import VueRouter from 'vue-router';
    
Vue.use(VueRouter);
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Work from './views/Single.vue'
import Contact from './views/Contact.vue'

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work/:title',
    name: 'Work',
    component: Work
  },
  {
    path: '/about-me',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
