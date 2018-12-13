import Vue from 'vue'
import Router from 'vue-router'
import ContactsApp from "./components/apps/ContactsApp";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'contacts' }},
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsApp,
    },
  ]
})
