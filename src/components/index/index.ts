import {Component} from 'vue-typed';
import router from '../../main';
/**
 * IndexPage Component
 */
require('./index.scss');
@Component({
    template: require('./index.pug')
})
export class Index {
    goCounter() {
        router.go('counter');
    }
}
