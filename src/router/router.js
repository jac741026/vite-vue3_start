import {
    createWebHashHistory,
    createRouter
} from 'vue-router';

const history = createWebHashHistory();
const routes = [
    {
        path: '/',
        component: () => import('../components/page/Index.vue')
    },
    {
        path: '/About',
        component: () => import('../components/page/About.vue')

    },
];
const router = createRouter({
    history,
    routes,
});
export default router;