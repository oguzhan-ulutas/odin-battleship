import { testGameBoard, GameBoard } from './gameboard';

testGameBoard.shipPlacer('carrier', 1, 2, testGameBoard.ships.carrier.length, 'horizontal');

test('is ship placed correctly in horizontal direction', () => {
  expect(testGameBoard.getShipCoor('carrier')).toEqual([
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
  ]);
});

testGameBoard.shipPlacer('submarine', 5, 7, testGameBoard.ships.submarine.length, 'vertical');

test('is ship placed correctly in vertical direction', () => {
  expect(testGameBoard.getShipCoor('submarine')).toEqual([
    [5, 7],
    [5, 8],
    [5, 9],
  ]);
});

testGameBoard.shipPlacer('destroyer', 10, 10, testGameBoard.ships.destroyer.length, 'vertical');

test('out of the board', () => {
  expect(testGameBoard.getShipCoor('destroyer')).toEqual([]);
});
