import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import params from '@/components/params'
import aliali from '@/components/aliali'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',   // 去掉URL地址里的 '#'
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: params
    }, {
      path: '/goHome',
      redirect: '/'
    }, {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }, {
      path: '/aliali',
      component: aliali,
      alias: '/deng'
    }, {

      // 404 页面路由
      path: '*',
      component: Error

    }
  ]
})
