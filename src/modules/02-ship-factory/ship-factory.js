const ShipFactory = (length) => {
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

const testShip = ShipFactory(4);
console.log(testShip.getHitTimes());
testShip.hit();
console.log(testShip.getHitTimes());
module.exports = testShip;
