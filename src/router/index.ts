import {Index} from '../components/index/index';
import {Counter} from '../components/counter/counter';
import Vue = require('vue');
import Router = require('vue-router');

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: 'index'
        },
        {
            path: '/index',
            component: Index,
            name : 'index'
        },
        {
            path: 'counter',
            component: Counter,
            name : 'counter'
        }
    ]
});

export default router;