import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import( '../views/HomeView.vue');
const Home = () => import( '../views/home/Home.vue');
const Category = () => import( '../views/category/Category.vue');
const Detail = () => import( '../views/detail/Detail.vue');
const Profile = () => import( '../views/profile/Profile.vue');
const Shopcart = () => import( '../views/shopcart/Shopcart.vue');
const Register = () => import('../views/profile/Register.vue');
const Login = () => import('../views/profile/Login.vue');

const routes = [
  {
    path: '',
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
      title:'图书兄弟-购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      title:'图书兄弟-个人中心'
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
      title:'图书兄弟-用户登录'
    }
  }
]
console.log(routes)
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to)
  next();
  document.title = to.meta.title;
})

export default router
