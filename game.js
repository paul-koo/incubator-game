import { GameStatuses } from './GAME_STATUSES.js';
import { SamuraiNumberUtility } from './samurai-number-utility.js';
import { Position } from './position.js';
import { Gooogle } from './google.js';
import { Player } from './players.js';

export class Game {
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4,
        },
        googleJumpInterval: 1000,
        playersCount: 1,
        googleWinPoints: 10,
    };
    #status = GameStatuses.PENDING;

    #googlePosition = null;
    #google = new Gooogle(this.#settings.gridSize);
    // #googlePoints = 0;

    #players = null;
    /**
     * @type SamuraiNumberUtility // JSDoc
     */
    #numberUtility;

    constructor() {
        this.#numberUtility = new SamuraiNumberUtility();
    }

    set googleJumpInterval(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('Google jump interval must be a positive integer');
        }
        this.#settings.googleJumpInterval = value;
    }

    get status() {
        return this.#status;
    }

    get googlePosition() {
        return this.#googlePosition;
    }

    get gridSize() {
        return this.#settings.gridSize;
    }

    start() {
        this.#status = GameStatuses.IN_PROGRESS;
        // this.#jumpGoogle();
        for (let i = 0; i < this.#settings.playersCount; i++) {
            // this.#players[`player${i + 1}`] = new Position(this.#settings.gridSize);
            this.#players[`player${i + 1}`] = new Player(this.#settings.gridSize, [`player${i + 1}`]);
        }
        setInterval(() => {
            //todo: #googleEscaped
            this.#google.jumpGoogle(this.#settings.gridSize);
            if (this.#google.points === this.#settings.googleWinPoints) {
                this.#status = GameStatuses.COMPLETED;
            }
        }, this.#settings.googleJumpInterval);
    }
    // #jumpGoogle() {
    //     const newPosition = new Position(this.#settings.gridSize);

    //     if (newPosition.x === this.googlePosition?.x && newPosition.y === this.googlePosition?.y) {
    //         this.#jumpGoogle();
    //         return;
    //     }
    //     this.#googlePosition = newPosition;
    //     this.#googlePoints = this.#googlePoints + 1;
    //     if (this.#googlePoints === this.#settings.googleWinPoints) {
    //         this.#status = GameStatuses.COMPLETED;
    //     }
    // }
}
