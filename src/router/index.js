import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      props: { username: '' }
    },
    {
      path: '/:username',
      name: 'dashboard-user',
      component: Dashboard,
      props: true
    }
  ]
})

export default router 