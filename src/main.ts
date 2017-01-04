import Vue = require('vue');
import {sync} from 'vuex-router-sync';
import {App} from './app';
import router from './router/index';
import store from './vuex/index';

/**
 * Application Main Entry Point here!!
 */

// router-vuex-sync
sync(store, router);

// vue-root-instance
const app = new Vue({
    components: {
        App,
    },
    router,
    store,
    template: `<app></app>`,
});

app.$mount('#app');

export { app, router, store }
