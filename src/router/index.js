import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Member from "../views/Member";
import AddMember from "../views/AddMember";
import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {requestUnAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {requestUnAuth: true}
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
    meta: {requestAuth: true}
  },
  {
    path: '/add-member',
    name: 'AddMember',
    component: AddMember,
    meta: {requestAuth: true}
  },
];

const router = new VueRouter({
  routes,
  mode:'history'
});

router.beforeEach((to, from, next)=>{
  if(to.meta.requestAuth && !store.getters.isAuthenticated){
    console.log('routing 1');
    next('/login')
  } else if(to.meta.requestUnAuth && store.getters.isAuthenticated){
    console.log('routing 2');
    next('/member')
  } else {
    console.log('routing 3');
    next()
  }
})

export default router;
