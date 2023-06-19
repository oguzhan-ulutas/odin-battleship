export default const ShipFactory = (length) => {
  let wracked = false;
  let hitTimes = 0;

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
    length,
    hit,
    getWracked,
    getHitTimes,
  };
};

// Create an instance for test purposes
const testShip = ShipFactory(4);
module.exports = testShip;
