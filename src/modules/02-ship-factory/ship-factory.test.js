const testShip = require('./ship-factory');

test('is length between 0-5', () => {
  expect(testShip.length).toBeGreaterThan(0);
  expect(testShip.length).toBeLessThanOrEqual(5);
});

test('is hitTime smaller than length', () => {
  expect(testShip.hitTime).toBeLessThanOrEqual(testShip.length);
});

test('is isSunk exist'()=>{
  expect(testShip.isSunk).toBe(false)
})

test("is hit function increase hitTime"()=>{
  const hit = testShip.hitTime;
  testShip.hit()
  const hitAfter = testShip.hitTime
  expect(hitAfter).toBe(hit+1)
})
