import ShipFactory from '../02-ship-factory/ship-factory.js';

export const GameBoard = () => {
  // Creating ships object
  const ships = {
    carrier: ShipFactory(5, 'carrier'),
    battleship: ShipFactory(4, 'battleship'),
    cruiser: ShipFactory(3, 'cruiser'),
    submarine: ShipFactory(3, 'submarine'),
    destroyer: ShipFactory(2, 'destroyer'),
  };

  let shipCoor = [];
  const getAllShipCoor = () => shipCoor;

  const arrayIncludes = (coordinate, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].join() === coordinate.join()) {
        return true;
      }
    }
    return false;
  };

  const shipPlacer = (ship, x, y, length, direction = 'horizontal') => {
    const coordinates = [];

    if (direction === 'horizontal') {
      if (x + length > 10) {
        return;
      }
      for (let i = 0; i < length; i++) {
        const coordinate = [x + i, y];
        if (arrayIncludes(coordinate, shipCoor)) {
          return;
        }
        coordinates.push(coordinate);
      }
    } else {
      if (y + length > 10) {
        return;
      }
      for (let i = 0; i < length; i++) {
        const coordinate = [x, y + i];
        if (arrayIncludes(coordinate, shipCoor)) {
          return;
        }
        coordinates.push(coordinate);
      }
    }
    ships[ship].boardCoordinates = coordinates;
    shipCoor = shipCoor.concat(coordinates);
  };

  const getShipCoor = (ship) => ships[ship].boardCoordinates;
  const shots = [];
  const getShots = () => shots;

  const receiveAttack = (x, y) => {
    const attackCoor = [x, y];
    if (arrayIncludes(attackCoor, getShots())) {
      return;
    }
    shots.push(attackCoor);

    Object.keys(ships).forEach((key) => {
      if (arrayIncludes(attackCoor, ships[key].boardCoordinates)) {
        ships[key].hit();
      }

      checkSunk(key);
    });
  };

  const checkSunk = (shipType) => {
    if (ships[shipType].length === ships[shipType].getHitTimes()) {
      ships[shipType].sunk();
    }
  };
  return {
    ships,
    shipPlacer,
    getShipCoor,
    getShots,
    receiveAttack,
    getAllShipCoor,
    arrayIncludes,
  };
};

// export GameBoard;

// Create an instance for test purposes
export const testGameBoard = GameBoard();
