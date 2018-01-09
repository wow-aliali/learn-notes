import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import params from '@/components/params'
import aliali from '@/components/aliali'

Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    }, {

      path: '/params/:newsId(\\d+)/:newsTitle',
      component: params

    }, {

      // 有时候我们虽然设置的路径不一致，但是我们希望跳转到同一个页面，或者说是打开同一个组件。这时候我们就用到了路由的重新定向redirect参数
      // 下面例子是从 /goHome 重定向到 /
      path: '/goHome',
      redirect: '/'

    }, {

      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'

    }, {

      // 使用alias别名的形式，我们也可以实现类似重定向的效果
      path: '/aliali',
      component: aliali,
      alias: '/deng'
      
    }

    // redirect和alias的区别
    // redirect：观察URL，redirect是直接改变了url的值，把url变成了需要跳转的path路径
    // alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容

    // 注意: 别名不要用在path为’/’中, 不会起作用
  ]
})
