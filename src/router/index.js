import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/side-dish',
      name: 'sideDish',
      // route level code-splitting
      // this generates a separate chunk (sideDish.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sideDishView.vue')
    },
    {
      path: '/main-course',
      name: 'main-course',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MainCourseView.vue')
    },
    {
      path: '/break-fast',
      name: 'break-fast',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/breakFastView.vue')
    },
    {
      path: '/appertizer',
      name: 'appertizer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/appertizerView.vue')
    },
    {
      path: '/dessert',
      name: 'dessert',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dessertView.vue')
    },
    {
      path: '/beverages',
      name: 'beverages',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/beveragesView.vue')
    },
    {
      path: '/soup',
      name: 'soup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/soupView.vue')
    },
    {
      path: '/drinks',
      name: 'drinks',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/drinksView.vue')
    },
    {
      path: '/snack',
      name: 'snack',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/snackView.vue')
    },
    {
      path: '/recipe-details/:id',
      name: 'recipe-details',
      props:true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/recipeDetailsView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:() => import('../views/login.vue')
    },
    {
      path:'/signup',
      name:'signup',
      component:() => import('../views/signup.vue')
    }, 
    {
      path:'/dashboard',
      name:'dashboard',
      component:() => import('../views/dashboard.vue'),
      meta:{
        requiresAuth:true
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})
router.beforeEach((to, from, next) => {
  const auth = useAuth();

  if (to.meta.requiresAuth && !auth.isLoggedIn ) {
    // User is not authenticated, redirect to login page
    next({ name: 'login' });
  } else {
    // Allow access
    next();
  }
})
export default router
