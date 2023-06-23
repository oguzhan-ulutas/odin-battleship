import { randomShipPlacer, computer, attack, player } from './player';

test('is all the ships placed', () => {
  randomShipPlacer(computer);
  expect(computer.ships.carrier.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.battleship.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.cruiser.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.submarine.boardCoordinates).not.toHaveLength(0);
  expect(computer.ships.destroyer.boardCoordinates).not.toHaveLength(0);
});

test('is computer attack recorded to player gameBoard', () => {
  const playerShotsLength = player.shots.length;
  attack(computer);
  expect(player.shots.length).toBe(playerShotsLength + 1);
});
