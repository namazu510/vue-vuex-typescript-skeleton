import Component from 'vue-class-component';
import Vue  = require('vue');
import {MutationTypes} from '../../vuex/mutation-types';
/**
 * Counter Component Vuex used
 */
@Component({
    template: require('./counter.pug')
})
export class Counter extends Vue {
    countUp() {
        this.$store.dispatch(MutationTypes.COUNT_UP);
    }
}
