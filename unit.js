import { Position } from './position';

export class Unit {
    #position;
    #name;
    constructor(gridSize, name) {
        this.#position = new Position(gridSize);
        this.#name = name;
    }

    get position() {
        return this.#position;
    }

    get name() {
        return this.#name;
    }
}
