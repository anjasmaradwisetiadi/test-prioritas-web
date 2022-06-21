import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Member from "../views/Member";
import AddMember from "../views/AddMember";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
  },
  {
    path: '/add-member',
    name: 'AddMember',
    component: AddMember,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
