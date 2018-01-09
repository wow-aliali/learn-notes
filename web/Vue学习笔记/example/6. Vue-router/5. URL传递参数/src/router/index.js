import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      // :冒号的形式传递参数
      // 我们希望传递的新闻ID只能是数字的形式，这时候我们就需要在传递时有个基本的类型判断，vue是支持正则的 (以圆括号的形式加入)
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: params
    }
  ]
})
