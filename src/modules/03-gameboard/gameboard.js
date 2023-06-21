import ShipFactory from '../02-ship-factory/ship-factory.js';
// const ShipFactory = require('../02-ship-factory/ship-factory');

const GameBoard = () => {
  // Creating ships object
  const ships = {
    carrier: ShipFactory(5, 'carrier'),
    battleship: ShipFactory(4, 'battleship'),
    cruiser: ShipFactory(3, 'cruiser'),
    submarine: ShipFactory(3, 'submarine'),
    destroyer: ShipFactory(2, 'destroyer'),
  };

  const shipPlacer = (ship, x, y, length, direction = 'horizontal') => {
    const coordinates = [];
    if (x + length > 11 || y + length > 11) {
      console.log('Invalid, the ship is out of the board.');
      return;
    }

    if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        const coordinate = [x + i, y];
        coordinates.push(coordinate);
      }
    } else {
      for (let i = 0; i < length; i++) {
        const coordinate = [x, y + i];
        coordinates.push(coordinate);
      }
    }
    ships[ship].boardCoordinates = coordinates;
  };

  const getShipCoor = (ship) => ships[ship].boardCoordinates;
  return { ships, shipPlacer, getShipCoor };
};

export default GameBoard;

// Create an instance for test purposes
export const testGameBoard = GameBoard();
testGameBoard.shipPlacer('carrier', 1, 2, testGameBoard.ships.carrier.length, 'horizontal');
console.log(Array.isArray(testGameBoard.getShipCoor('carrier')));
