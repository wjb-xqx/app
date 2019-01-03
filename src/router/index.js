import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import BdPassword from '@/components/BdPassword'

// 首页
import home from '@/components/home/home'
import Follow from '@/components/home/components/Follow'
import Recommend from '@/components/home/components/Recommend'
import Videoes from '@/components/home/components/Videoes'
//版区
import Edition from '@/components/Edition/Edition'
import myEdition from '@/components/Edition/components/myEdition'
import hot from '@/components/Edition/components/hot'
      //版区中热区导航路由组件
import hotMore from '@/components/Edition/components/hotMore'
import hotDimension from '@/components/Edition/components/hotDimension'
import hotDaily from '@/components/Edition/components/hotDaily'
import hotVideo from '@/components/Edition/components/hotVideo'
import hotGame from '@/components/Edition/components/hotGame'
// 信息
import Information from '@/components/Information/Information'
// 个人中心
import User from '@/components/User/User'
// 发布消息
import Release from '@/components/Release/Release'
// 添加标签页面
import AddLabel from '@/components/Release/AddLabel'
// 设置
import setInfo from '@/components/setInfo'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    { path: '', redirect: '/home' },
    {path:'/home',name: 'home',component: home,
      children:[
        {path: '/home',name: '/Follow',component: Follow},
        {path: '/Follow',name: 'Follow',component: Follow},
        {path: '/Recommend',name: 'Recommend',component: Recommend},
        {path: '/Videoes',name: 'Videoes',component: Videoes}
      ]
    },
    //版区
    {path:'/Edition',name: 'Edition',component: Edition,
      children:[
        {path: '/Edition',name: '/myEdition',component: myEdition},
        {path: '/myEdition',name: 'myEdition',component: myEdition},
        {path: '/hot',name: 'hot',component: hot,
          children:[
            {path:'/hot',name:'/hotMore',component:hotMore},
            {path:'/hotMore',name:'hotMore',component:hotMore},
            {path:'/hotDimension',name:'hotDimension',component:hotDimension},
            {path:'/hotDaily',name:'hotDaily',component:hotDaily},
            {path:'/hotVideo',name:'hotVideo',component:hotVideo},
            {path:'/hotGame',name:'hotGame',component:hotGame},
          ]
      }]
    },
    // 个人中心
    {path: '/User',name: 'User',component: User},
    // 信息
    {path:'/Information',name:'Information',component:Information},
    // 发布
    {path: '/Release',name: 'Release',component: Release },
    {path: '/Release/AddLabel',name: 'AddLabel',component: AddLabel },
    
    {path: '/setInfo',name: 'setInfo',component: setInfo},
    {path: '/login', name: 'login',component: login},
    {path: '/BdPassword', name: 'BdPassword',component: BdPassword},
    
  ]
})
