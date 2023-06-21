import ShipFactory from '../02-ship-factory/ship-factory.js';

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
  const shots = [];

  const receiveAttack = (x, y) => {
    const attackCoor = [x, y];
    shots.push(attackCoor);

    Object.keys(ships).forEach((key) => {
      ships[key].boardCoordinates.forEach((element) => {
        if (JSON.stringify(element) === JSON.stringify(attackCoor)) {
          ships[key].hit();
        }
      });
    });
  };
  return {
    ships,
    shipPlacer,
    getShipCoor,
    shots,
    receiveAttack,
  };
};

export default GameBoard;

// Create an instance for test purposes
export const testGameBoard = GameBoard();
