import {Action} from '~vuex/index';
import {MutationTypes} from './mutation-types';
import {State} from './store';

export class Actions {

    static countUp: Action<State> =
        ({dispatch}:any) => {
            dispatch(MutationTypes.COUNT_UP);
        };

}

