import Vue from 'vue'
import Router from 'vue-router'
import ContactsApp from "./components/apps/ContactsApp";
import SettingsApp from "./components/apps/SettingsApp";
import TamApp from "./components/apps/TamApp";
import PodApp from "./components/apps/PodApp";
import OrganizationApp from "./components/apps/OrganizationApp";
import BuildingApp from "./components/apps/BuildingApp";
import Crm from "./components/Crm";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', redirect: { name: 'contacts' }},
    { path: '/crm', component: Crm,
      children: [
        {
          path: 'contacts',
          name: 'contacts',
          component: ContactsApp,
        },
        {
          path: 'pod',
          name: 'pod',
          component: PodApp,
        },
        {
          path: 'organization',
          name: 'organization',
          component: OrganizationApp,
        },
        {
          path: 'building',
          name: 'building',
          component: BuildingApp,
        },
      ]
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
