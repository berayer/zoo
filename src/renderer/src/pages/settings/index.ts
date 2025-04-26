import { UserIcon, WrenchIcon, PaletteIcon, BellIcon } from 'lucide-vue-next'

export const settingsRoute = {
  path: '/settings',
  component: () => import('@/pages/settings/index.vue'),
  redirect: '/settings/user',
  meta: {
    title: '配置',
  },
  children: [
    {
      path: '/settings/user',
      component: () => import(`@/pages/settings/user/index.vue`),
      meta: {
        title: '用户',
        icon: UserIcon,
      },
    },
    {
      path: '/settings/kujiale',
      component: () => import(`@/pages/settings/kujiale/index.vue`),
      meta: {
        title: '酷家乐',
        icon: WrenchIcon,
      },
    },
    {
      path: '/settings/ikuuu',
      component: () => import(`@/pages/settings/ikuuu/index.vue`),
      meta: {
        title: 'ikuuu',
        icon: PaletteIcon,
      },
    },
    {
      path: '/settings/notification',
      component: () => import(`@/pages/settings/notification/index.vue`),
      meta: {
        title: '通知',
        icon: BellIcon,
      },
    },
  ],
}
