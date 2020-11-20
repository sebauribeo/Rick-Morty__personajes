export default class Personajes {
    constructor(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set id(number) {
        this._id = number;
    }
}


