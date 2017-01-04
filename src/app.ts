import Component from 'vue-class-component';
import Vue = require('vue');
/*
 * App Top Level Component
 */
require('./app.scss');
@Component({
    template: require('./app.pug'),
})
export class App extends Vue {

}
