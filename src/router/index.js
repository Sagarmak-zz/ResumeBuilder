import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ResumeTemplate from '@/components/ResumeTemplate';
import ResumeTemplate2 from '@/components/ResumeTemplate2';
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
      path: '/resumetemplate2',
      name: 'ResumeTemplate2',
      component: ResumeTemplate2
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
});
