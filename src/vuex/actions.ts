import {ActionTree} from 'vuex';
import {MutationTypes} from './mutation-types';
import {State} from './state';


const actions: ActionTree<State,State> = {
    [MutationTypes.COUNT_UP]: ({commit}) => {
        commit(MutationTypes.COUNT_UP);
    },
};

export default actions;
