import Vue = require('vue');
import VueRouter = require('vue-router');
import {App} from './app';
import store from './vuex/index';
import router from './router/index';
import {sync} from 'vuex-router-sync';

/**
 * Application Main Entry Point here!!
 *
 * vue init, router init and config
 */

// router-vuex-sync
sync(store, router);

// instance
const app = new Vue({
    router,
    store,
    components: {
        App
    }
});

app.$mount('#app');

export { app, router, store }

