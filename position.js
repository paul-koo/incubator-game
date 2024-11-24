import { SamuraiNumberUtility } from './samurai-number-utility';

export class Position {
    #numberUtility;
    constructor(gridSize) {
        this.#numberUtility = new SamuraiNumberUtility();
        this.x = this.#numberUtility.getRandomInteger(0, gridSize.columnsCount);
        this.y = this.#numberUtility.getRandomInteger(0, gridSize.rowsCount);
    }

    position(gridSize) {
        return {
            x: this.#numberUtility.getRandomInteger(0, gridSize.columnsCount),
            y: this.#numberUtility.getRandomInteger(0, gridSize.rowsCount),
        };
    }
}
