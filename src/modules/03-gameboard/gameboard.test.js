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

test('is recieveAttack call hit', () => {
  testGameBoard.shipPlacer('submarine', 5, 7, testGameBoard.ships.submarine.length, 'vertical');
  testGameBoard.receiveAttack(5, 8);
  expect(testGameBoard.ships.submarine.getHitTimes()).toEqual(1);
});

test('is ship sunk', () => {
  testGameBoard.shipPlacer('submarine', 5, 7, testGameBoard.ships.submarine.length, 'vertical');
  testGameBoard.receiveAttack(5, 7);
  testGameBoard.receiveAttack(5, 8);
  testGameBoard.receiveAttack(5, 9);
  expect(testGameBoard.ships.submarine.getWracked()).toEqual(true);
});
