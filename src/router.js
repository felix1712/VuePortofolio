import Vue from 'vue';
import Router from 'vue-router';
import AppHome from './views/AppHomes/AppHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome,
    },
  ],
});
