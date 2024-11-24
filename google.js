import { Unit } from './unit.js';
export class Gooogle extends Unit {
    #points;
    constructor(gridSize, name = 'Google') {
        super(gridSize, name);
        this.points = 0;
    }

    jumpGoogle(gridSize) {
        const newPosition = new Position(gridSize);

        if (newPosition.x === this.position?.x && newPosition.y === this.position?.y) {
            this.jumpGoogle(gridSize);
            return;
        }
        this.position = newPosition;
        this.#points = this.#points + 1;
    }

    get points() {
        return this.#points;
    }
}
