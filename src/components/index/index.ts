import Component from 'vue-class-component';
import Vue = require('vue');
/**
 * IndexPage Component
 */
require('./index.scss');
@Component({
    template: require('./index.pug')
})
export class Index extends Vue{
    goCounter() {
        this.$router.push('counter');
    }
}
