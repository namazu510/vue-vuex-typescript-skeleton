import {app} from '../../../src/main';
import Vue = require('vue');

describe('ページ全体のテスト', () => {

    it('AppRendered', () => {
        expect(app.$el.querySelector('#index')).toBeDefined();
    });
});
