import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import HomePage from '@/views/HomePage/homepage-index.vue';


const routes = [
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;