const testGameboard = require('./gameboard');

describe('shipPlacer', () => {
  test('is ship placed correctly in horizontal direction', () => {
    expect(
      testGameboard.shipPlacer(1, 2, testGameboard.carrier.length, 'horizontal').toBe(
        (testGameboard.getShipCoor().carrier = [
          [1, 2],
          [2, 2],
          [3, 2],
          [4, 2],
          [5, 2],
        ]),
      ),
    );
  });

  test.skip('is ship placed correctly in vertical direction', () => {
    expect(
      testGameboard.shipPlacer(5, 7, testGameboard.submarine.length, 'vertical').toBe(
        (testGameboard.getShipCoor().submarine = [
          [5, 7],
          [5, 8],
          [5, 9],
        ]),
      ),
    );
  });

  test.skip('out of the board', () => {
    expect(
      testGameboard
        .shipPlacer(5, 7, testGameboard.battleship.length, 'vertical')
        .toBe(console.log('Invalid, the ship is out of the board')),
    );
  });
});
