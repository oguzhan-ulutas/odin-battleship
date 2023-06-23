import GameBoard from '../03-gameboard/gameboard.js';

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
  ships.forEach((element) => {
    while (player.ships[element].boardCoordinates.length === 0) {
      const x = randomNumber();
      const y = randomNumber();
      const direction = randomDirection();
      const { length } = player.ships[element];
      player.shipPlacer(element, x, y, length, direction);
    }
  });
}

console.log(computer);
