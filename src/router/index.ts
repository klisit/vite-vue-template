import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'
import EmptyLayout from '@/layouts/Empty.vue'

const Home = () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
const Test1 = () => import(/* webpackChunkName: "test-1" */ '@/views/Test-1.vue')
const Test2 = () => import(/* webpackChunkName: "test-2" */ '@/views/Test-2.vue')

/**
 * @description 设置布局容器
 * @param app
 */
export function setupLayout(app: any) {
  app.component('default-layout', DefaultLayout)
  app.component('empty-layout', EmptyLayout)
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default',
      title: '首页',
      keepAlive: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: 'default',
      title: '关于',
      keepAlive: true,
    },
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Test1,
    meta: {
      layout: 'default',
      title: 'Test1',
      keepAlive: true,
    },
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2,
    meta: {
      layout: 'default',
      title: 'Test2',
      keepAlive: true,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
