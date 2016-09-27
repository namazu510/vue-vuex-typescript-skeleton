import {State} from './store';

export function getCount(state : State) : number {
    return state.count;
}
