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
      component: aliali,
      children: [
        { path: '/', name: 'aliali', component: aliali },
        { path: 'alialiInfo', name: 'alialiInfo', component: alialiInfo },
        { path: 'alialiFriend', name: 'alialiFriend', component: alialiFriend }
      ]
    }
  ]
})
