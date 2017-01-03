import Vue = require('vue');
import Vuex = require('vuex');
import actions from './actions';
import mutations from './mutation';
import state from './state';
import getters from './getter';

Vue.use(Vuex);

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

const prod = (NODE_ENV === 'production') ? true : false;

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    strict: prod
});

export default store;