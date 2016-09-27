import {Component,Action,Getter} from 'vue-typed';
import {getCount} from '../../vuex/getter';
import {Actions} from '../../vuex/actions';
import router from '../../main';
/**
 * Counter Component Vuex used
 */
@Component({
    template: require('./counter.pug'),
})
export class Counter {

    @Getter(getCount)
    count: number;

    @Action(Actions.countUp)
    countUp() {

    }

    back() {
        router.go('index');
    }

}
