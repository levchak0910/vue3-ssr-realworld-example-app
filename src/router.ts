import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

export type AppRouteNames = 'global-feed'
| 'my-feed'
| 'tag'
| 'article'
| 'create-article'
| 'edit-article'
| 'login'
| 'register'
| 'profile'
| 'profile-favorites'
| 'settings'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const generateRouter = (type: 'client' | 'ssr') => createRouter({
  history: type === 'client' ? createWebHistory() : createMemoryHistory(),

  routes: [
    {
      name: 'global-feed',
      path: '/',
      component: () => import('./pages/Home.vue'),
    },
    {
      name: 'my-feed',
      path: '/my-feeds',
      component: () => import('./pages/Home.vue'),
    },
    {
      name: 'tag',
      path: '/tag/:tag',
      component: () => import('./pages/Home.vue'),
    },
    {
      name: 'article',
      path: '/article/:slug',
      component: () => import('./pages/Article.vue'),
    },
    {
      name: 'edit-article',
      path: '/article/:slug/edit',
      component: () => import('./pages/EditArticle.vue'),
    },
    {
      name: 'create-article',
      path: '/article/create',
      component: () => import('./pages/EditArticle.vue'),
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('./pages/Login.vue'),
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('./pages/Register.vue'),
    },
    {
      name: 'profile',
      path: '/profile/:username',
      component: () => import('./pages/Profile.vue'),
    },
    {
      name: 'profile-favorites',
      path: '/profile/:username/favorites',
      component: () => import('./pages/Profile.vue'),
    },
    {
      name: 'settings',
      path: '/settings',
      component: () => import('./pages/Settings.vue'),
    },
  ],
})
