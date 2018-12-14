import Vue from 'vue'
import Router from 'vue-router'
import ContactsApp from "./components/apps/ContactsApp";
import SettingsApp from "./components/apps/SettingsApp";
import TamApp from "./components/apps/TamApp";

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
    {
      path: '/settings',
      name: 'settings',
      component: SettingsApp,
    },
    {
      path: '/tam',
      name: 'tam',
      component: TamApp,
    },
  ]
})
