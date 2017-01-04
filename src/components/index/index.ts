import Component from 'vue-class-component';
import Vue = require('vue');
/**
 * IndexPage Component
 */
require('./index.scss');
@Component({
    name: 'index',
    template: require('./index.pug'),
})
export class Index extends Vue {
    private goCounter() {
        this.$router.push('counter');
    }
}
