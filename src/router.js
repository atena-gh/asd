import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './view/LoginPage.vue';
import ProfilePage from './view/ProfilePage.vue';
import DashboardPage from './view/DashboardPage.vue';
import SaveReceiptPage from './view/SaveReceiptPage.vue';
import CheckReceiptPage from './view/CheckReceiptPage.vue';
import CheckCodePage from './view/CheckCodePage.vue';


const routes = [
  {
    path: '/',
    component: LoginPage,
    name : 'login'
   },
   {
    path: '/dashboard',
    component: DashboardPage,
    name : 'dashboard'
   },
   {
    path: '/profile',
    component: ProfilePage,
    name : 'profile'
   },
   {
    path: '/saveReceipt',
    component: SaveReceiptPage,
    name:'saveReceipt'
   },
   {
    path: '/CheckReceipt',
    component: CheckReceiptPage,
    name : 'checkReceipt'
   },
   {
    path: '/CheckCode',
    component: CheckCodePage,
    name : 'checkCode'
   },

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router