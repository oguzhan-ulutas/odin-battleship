import { testShip, ShipFactory } from './ship-factory';

test('is length between 0-5', () => {
  expect(testShip.length).toBeGreaterThan(0);
  expect(testShip.length).toBeLessThanOrEqual(5);
});

test('is hitTime smaller than length', () => {
  expect(testShip.getHitTimes()).toBeLessThanOrEqual(testShip.length);
});

test('is wracked exist', () => {
  expect(testShip.getWracked()).toBe(false);
});

test('is hit function increase the hitTimes', () => {
  const hitTime = testShip.getHitTimes();
  testShip.hit();

  expect(testShip.getHitTimes()).toBe(hitTime + 1);
});

test('is wracked change, after hits', () => {
  for (let i = 0; i < testShip.length; i++) {
    testShip.hit();
  }
  expect(testShip.getWracked()).toBe(true);
});
