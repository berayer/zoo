import { BotIcon } from 'lucide-vue-next'

export const apps = [
  {
    path: '/apps/auto-add-color',
    component: () => import('@/pages/apps/auto-add-color/index.vue'),
    meta: {
      title: '自动添加花色',
      icon: BotIcon,
      desc: '识别字符串中包含的花色, 使用自动程序添加为条件',
    },
  },
  {
    path: '/apps/3vjia-exploder',
    component: () => import('@/pages/apps/3vjia-exploder/index.vue'),
    meta: {
      title: '三维家模型管理',
      icon: BotIcon,
      desc: '三维家模型管理, 快捷移动目录以及查询',
    },
  },
  {
    path: '/apps/kujiale-data-export',
    component: () => import('@/pages/apps/kujiale-data-export/index.vue'),
    meta: {
      title: '酷家乐数据导出',
      icon: BotIcon,
      desc: '通过酷家乐api导出数据',
    },
  },
  {
    path: '/apps/liansi-export',
    component: () => import('@/pages/apps/liansi-export/index.vue'),
    meta: {
      title: '联思数据导出',
      icon: BotIcon,
      desc: '联思统计数据导出Excel',
    },
  },
]
