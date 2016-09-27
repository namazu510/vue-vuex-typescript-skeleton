import store from './vuex/store';
import {Component} from 'vue-typed';
/*
 * App Top Level Component
 */
require('./app.scss');
@Component({
    template: require('./app.pug'),
    store: store
})
export class App {

}
