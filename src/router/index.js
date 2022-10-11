import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/test',
    component: () => import('@/views/front/Test')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/front/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/front/About')
  },
  {
    redirect: '/market/all',
    path: '/market',
    name: 'market',
    component: () => import('@/views/front/Market'),
    children: [
      {
        path: 'all',
        name: 'all',
        component: () => import('@/components/MarketAll')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('@/components/MarketFavor')
      }
    ]
  },
  {
    redirect: '/market',
    path: '/trade',
    name: 'trade',
    component: () => import('@/views/front/Trade'),
    children: [
      {
        path: 'USDT_:id',
        component: () => import('@/components/CryptoInfo')
      }
    ]
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: () => import('@/views/front/Wallet')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
