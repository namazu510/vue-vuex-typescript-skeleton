// root state object
// each Vuex instance is just a single state tree.

export class State {

    count : number;

    // state initializer
    constructor() {
        this.count = 0;
    }
}

const state = new State();
export default state;
