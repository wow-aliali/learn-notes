import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import params from '@/components/params'
import aliali from '@/components/aliali'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {

      // 三个参数：
      // to: 路由将要跳转的路径信息，信息是包含在对像里边的
      // from: 路径跳转前的路径信息，也是一个对象的形式
      // next: 路由的控制参数，常用的有next(true)和next(false), next(false)和不写表示页面不会跳转

      path: '/params/:newsId(\\d+)/:newsTitle',
      component: params,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        next();
      }

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
      path: '*',
      component: Error
    }
  ]
})
