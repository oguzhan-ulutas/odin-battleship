import { randomShipPlacer, computer } from './player';

test('is all the ships placed', () => {
  randomShipPlacer(computer);
  expect(computer.ships.carrier.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.battleship.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.cruiser.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.submarine.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.destroyer.boardCoordinates).not.toHaveLength(0);
});
