import { Position } from './position';

describe('position', () => {
    test('return correct value', () => {
        const gridSize = { columnsCount: 4, rowsCount: 4 };
        for (let i = 0; i < 10; i++) {
            const result = new Position(gridSize);
            expect(result.x).toBeLessThan(gridSize.columnsCount);
            expect(result.y).toBeLessThan(gridSize.rowsCount);
        }
    });
});
