import { createWebHashHistory, createRouter } from 'vue-router'
import { settingsRoute } from '@/pages/settings'
import { apps } from '@/pages/apps'

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
  ...apps,
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
