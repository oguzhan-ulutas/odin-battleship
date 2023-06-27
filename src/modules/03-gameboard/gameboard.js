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

  let shipCoor = [];
  const getAllShipCoor = () => shipCoor;
  const areAllItemsUnique = (coordinate) => {
    for (let i = 0; i < shipCoor.length; i++) {
      if (shipCoor[i].join() === coordinate.join()) {
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
        if (areAllItemsUnique(coordinate)) {
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
        if (areAllItemsUnique(coordinate)) {
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

  const receiveAttack = (x, y) => {
    const attackCoor = [x, y];
    if (shots.some((attackCoor) => attackCoor)) {
      return;
    }
    shots.push(attackCoor);

    Object.keys(ships).forEach((key) => {
      ships[key].boardCoordinates.forEach((element) => {
        if (JSON.stringify(element) === JSON.stringify(attackCoor)) {
          ships[key].hit();
        }
      });
      checkSunk(key);
    });
  };

  const checkSunk = (shipType) => {
    if (ships[shipType].length === ships[shipType].getHitTimes()) {
      ships[shipType].sunk();
      console.log(`${shipType} has been sunk.`);
    }
  };
  return {
    ships,
    shipPlacer,
    getShipCoor,
    shots,
    receiveAttack,
    getAllShipCoor,
    areAllItemsUnique,
  };
};

export default GameBoard;

// Create an instance for test purposes
export const testGameBoard = GameBoard();
