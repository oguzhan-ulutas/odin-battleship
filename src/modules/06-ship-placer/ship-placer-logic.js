import { player, computer, randomShipPlacer } from '../04-player/player.js';
import { randomPlacer } from './ship-placer-ui.js';

// Informs player about the ship
function shipInfo(ship) {
  addContent(
    info,
    `Place your ${player.ships[ship].name}.\nThe length of the ship is ${player.ships[ship].length} cells`,
  );
}

// Rotates ship
let direction = 'horizontal';
function rotateShip() {
  rotateButton.addEventListener('click', () => {
    direction === 'horizontal' ? (direction = 'vertical') : (direction = 'horizontal');
  });
}

// Gets cell coordinates
let x;
let y;

function getCellCoordinates() {
  const cells = document.querySelectorAll('[class^=cell]');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      x = Number(e.target.className[5]);
      y = Number(e.target.className[7]);
      console.log(x, y);
    });
  });
}

export default function playerShipPlacer() {
  // Placing computer ships
  randomShipPlacer(computer);

  // Placing player ships randomly
  randomPlacer.addEventListener('click', () => {
    randomShipPlacer(player);
    console.log(player);
  });
}
