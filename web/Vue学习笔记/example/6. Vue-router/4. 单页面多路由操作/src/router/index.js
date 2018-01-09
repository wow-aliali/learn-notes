import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cont1 from '@/components/cont1'
import cont2 from '@/components/cont2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: cont1,
        right: cont2
      }
    }, {
      path: '/aliali',
      components: {
        default: HelloWorld,
        left: cont2,
        right: cont1
      }
    }
  ]
})
