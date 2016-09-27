import {App} from './app';
import {Index} from './components/index/index';
import {Counter} from './components/counter/counter';

export function configureRouter(router: vuejs.Router<App>) {
    router.map({
        '/': {
            component: Index,
            name : 'index'
        },
        '/index': {
            component: Index,
            name : 'index'
        },
        '/counter': {
            component: Counter,
            name : 'counter'
        }
    });
}
