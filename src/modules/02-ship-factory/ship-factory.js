const ShipFactory = (length, shipType) => {
  const name = shipType;
  let wracked = false;
  let hitTimes = 0;
  const type = shipType;
  const boardCoordinates = [];

  const sunk = () => {
    wracked = true;
  };

  const hit = () => {
    hitTimes += 1;
    if (hitTimes === length) {
      sunk();
    }
  };

  const getHitTimes = () => hitTimes;
  const getWracked = () => wracked;

  return {
    name,
    length,
    hit,
    getWracked,
    getHitTimes,
    type,
    boardCoordinates,
    sunk,
  };
};

// Create an instance for test purposes
export const testShip = ShipFactory(4);

export default ShipFactory;
