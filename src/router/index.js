import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Controls from '@/components/Controls'
import ControlTools from '@/components/ControlTools'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/controls',
      name: 'Controls',
      component: Controls
    },
    {
      path: '/controlTools',
      name: 'ControlTools',
      component: ControlTools,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name){
          next()
        } else {
          next({ name: 'Controls'})
        }
      }
    }
    
  ]
})
