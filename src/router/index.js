import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import History from '@/components/History'
import User from '@/components/User'
import None from '@/components/None'
// import Dynamic from '@/components/Dynamic'
import Detail from '@/components/Detail'
import Subscription from '@/components/Subscription'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  routes: [
    // * 通配符表示当前没有配置路由的时候跳转的地址，优先级最低
    {
      path: '*',
      name: 'None',
      component: None
    },
    // 动态路径参数 以冒号开头, home/*都会跳转到指定的组件component
    // 一个『路径参数』使用冒号 : 标记，当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用
    // 匹配路径：/user/evan/post/123，$route.params：{ username: 'evan', post_id: 123 }
    {
      path: '/home/:id',
      name: 'Detail',
      component: Detail,
      // props设置为true，route.params将会被设置为组件属性
      props: true,
      // 嵌套路由children
      children: [
        {
          path: 'subscription',
          name: 'Subscription',
          component: Subscription
        }
      ]
    },
    // 路由重定向
    {
      path: '/',
      redirect: '/home'
    },
    // 命名视图
    {
      path: '/home',
      name: 'Home',
      components: {
        default: Home,
        a: View
      }
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
