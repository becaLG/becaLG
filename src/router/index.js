import store from '@/store';
import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import( '../views/HomeView.vue');
const Home = () => import( '../views/home/Home.vue');
const Category = () => import( '../views/category/Category.vue');
const Detail = () => import( '../views/detail/Detail.vue');
const Profile = () => import( '../views/profile/Profile.vue');
const Shopcart = () => import( '../views/shopcart/Shopcart.vue');
const Register = () => import('../views/profile/Register.vue');
const Login = () => import('../views/profile/Login.vue');
const Address = () => import('../views/profile/Address.vue');
const AddressEdit = () => import('../views/profile/AddressEdit.vue');
const CreateOrder = () => import('../views/order/CreateOrder');
const Order = () => import('../views/order/Order');
const OrderDetail = () => import('../views/order/OrderDetail.vue');
// const ZuoYe = () => import('../views/order/ZuoYe.vue');

import { Notify, Toast } from 'vant';

const routes = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home,
    meta:{
      title:'图书兄弟'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'图书兄弟'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta:{
      title:'图书兄弟-商品分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta:{
      title:'图书兄弟-商品详情'
    }
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart,
    meta:{
      title:'图书兄弟-购物车',
      isAuthRequired:true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      title:'图书兄弟-个人中心',
      isAuthRequired:true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title:'图书兄弟-用户注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'图书兄弟-用户登录',
      isAuthRequired:true
    }
  }
  ,
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta:{
      title:'图书兄弟-地址管理',
      isAuthRequired:true
    }
  }
  ,
  {
    path: '/addressedit',
    name: 'AddressEdit',
    component: AddressEdit,
    meta:{
      title:'图书兄弟-地址编辑',
      isAuthRequired:true
    }
  }
  ,
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      title:'图书兄弟-用户注册'
    }
  },
  {
    path: '/createorder',
    name: 'CreateOrder',
    component: CreateOrder,
    meta:{
      title:'图书兄弟-订单预览'
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta:{
      title:'图书兄弟-订单列表'
    }
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta:{
      title:'图书兄弟-订单'
    }
  },

  // {
  //   path: '/zuoye',
  //   name: 'ZuoYe',
  //   component: ZuoYe,
  //   meta:{
  //     title:'作业'
  //   }
  // },
  
]
console.log(routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{

  if(to.meta.isAuthRequired && store.state.user.isLogin == false){
    Notify('您还没有登录,请到登录页面登录');
    return next('/login');
  }else{
    next();
  }

  next();
  document.title = to.meta.title;
})

export default router
