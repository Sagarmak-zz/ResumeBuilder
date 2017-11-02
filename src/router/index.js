import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ResumeTemplate from '@/components/ResumeTemplate';
import Dashboard from '@/Dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/resumetemplate',
      name: 'ResumeTemplate',
      component: ResumeTemplate
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
});
