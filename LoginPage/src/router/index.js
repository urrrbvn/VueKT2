import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import ProblemPage from '../pages/ProblemPage.vue'
import UserListPage from '../pages/UserListPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: HomePage
    },
    {
      path:'/login',
      component: LoginPage
    },
    {
      path:'/profile',
      component: ProfilePage
    },
    {
      path:'/profile/problem',
      component: ProblemPage
    },
    {
      path:'/users',
      component: UserListPage
    }
    
  ]
})

export default router
