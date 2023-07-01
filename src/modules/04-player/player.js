import { arrayIncludes } from '../01-building-blocks/building-blocks.js';
import { GameBoard } from '../03-gameboard/gameboard.js';

export const player = GameBoard();
export const computer = GameBoard();

const randomNumber = () => Math.floor(Math.random() * 10);

const randomDirection = () => {
  const random = randomNumber();
  if (random <= 4) {
    return 'horizontal';
  }
  return 'vertical';
};

// Place ships randomly
export function randomShipPlacer(player) {
  const ships = Object.keys(player.ships);
  ships.forEach((ship) => {
    while (player.ships[ship].boardCoordinates.length === 0) {
      const x = randomNumber();
      const y = randomNumber();
      const direction = randomDirection();
      const { length } = player.ships[ship];
      player.shipPlacer(ship, x, y, length, direction);
    }
  });
}

export function computerAttack() {
  let x = randomNumber();
  let y = randomNumber();
  while (arrayIncludes([x, y], player.getShots())) {
    x = randomNumber();
    y = randomNumber();
  }
  player.receiveAttack(x, y);
}
