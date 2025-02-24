import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', component: Home },
    // 嵌套路由示例
    // {
    //     path: '/user',
    //     component: () => import('../views/UserLayout.vue'),
    //     children: [
    //         { path: 'profile', component: () => import('../views/UserProfile.vue') },
    //         { path: 'settings', component: () => import('../views/UserSettings.vue') }
    //     ]
    // },
    // 404 页面
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;