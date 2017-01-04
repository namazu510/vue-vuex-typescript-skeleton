import {MutationTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations : MutationTree<State> = {
    [MutationTypes.COUNT_UP]: (state: State) => {
        state.count += 1;
    },
};

export default mutations;