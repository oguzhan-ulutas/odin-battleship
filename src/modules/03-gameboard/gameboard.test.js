import { testGameBoard, GameBoard } from './gameboard';

test('is ship placed correctly in horizontal direction', () => {
  testGameBoard.shipPlacer('carrier', 1, 2, testGameBoard.ships.carrier.length, 'horizontal');

  expect(testGameBoard.getShipCoor('carrier')).toEqual([
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
  ]);
});

test('is ship placed correctly in vertical direction', () => {
  testGameBoard.shipPlacer('submarine', 5, 7, testGameBoard.ships.submarine.length, 'vertical');
  expect(testGameBoard.getShipCoor('submarine')).toEqual([
    [5, 7],
    [5, 8],
    [5, 9],
  ]);
});

test('out of the board', () => {
  testGameBoard.shipPlacer('destroyer', 10, 10, testGameBoard.ships.destroyer.length, 'vertical');
  expect(testGameBoard.getShipCoor('destroyer')).toEqual([]);
});

test('is shots array populated', () => {
  testGameBoard.receiveAttack(6, 7);
  expect(testGameBoard.shots).toEqual([[6, 7]]);
});
