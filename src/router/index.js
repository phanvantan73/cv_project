import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/index')
  }
];

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routes,
});

const router = createRouter();

export default router;
