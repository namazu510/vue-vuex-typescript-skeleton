import {Counter} from '../components/counter/counter';
import {Index} from '../components/index/index';
import Vue = require('vue');
import Router = require('vue-router');

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'root',
            path: '/',
            redirect: 'index',
        },
        {
            component: Index,
            name: 'index',
            path: '/index',

        },
        {
            component: Counter,
            name: 'counter',
            path: '/counter',
        },
    ],
});

export default router;
