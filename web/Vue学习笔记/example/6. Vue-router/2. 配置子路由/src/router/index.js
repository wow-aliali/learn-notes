import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aliali from '@/components/aliali'
import alialiInfo from '@/components/aliali-info'
import alialiFriend from '@/components/aliali-friend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/aliali',
      name: 'aliali',
      component: aliali,
      children: [
        { path: '/', component: aliali },    // 这里的'/'根目录是指'/aliali'
        { path: 'alialiInfo', component: alialiInfo },    // 注意开头不需要'/'
        { path: 'alialiFriend', component: alialiFriend }
      ]
    }
  ]
})
