import {App} from '../../../src/app';
import Vue = require('vue');

describe('AppComponent-Test', () => {

    const vm = new Vue({
        template: '<div><app></app></div>',
        components: {App}
    }).$mount();


    it('AppRendered', () => {
        expect(vm.$el.querySelector('#index')).toBeDefined();
    });
});
