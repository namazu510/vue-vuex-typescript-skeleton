import Vue = require('vue');
import Vuex = require('vuex');
import {MutationTree} from '~vuex/index';
import {MutationTypes} from './mutation-types';
import COUNT_UP = MutationTypes.COUNT_UP;

Vue.use(Vuex.install);

const debug = true;
Vue.config.debug = debug;

// root state object
// each Vuex instance is just a single state tree.
export class State {

    count : number;

    // state initializer
    constructor() {
        this.count = 0;
    }
}

const state = new State();

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations : MutationTree<State> = {
    [COUNT_UP] (state: State) {
        state.count += 1;
    }
};


// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
export default new Vuex.Store({
    state: state,
    mutations: mutations,
    strict: debug,
});
