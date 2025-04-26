import { createWebHashHistory, createRouter } from 'vue-router'
import { settingsRoute } from '@/pages/settings'

const routes = [
  {
    path: '/',
    redirect: '/apps',
  },
  {
    path: '/apps',
    component: () => import('@/pages/apps/index.vue'),
    meta: {
      title: '应用',
    },
  },
  settingsRoute,
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
