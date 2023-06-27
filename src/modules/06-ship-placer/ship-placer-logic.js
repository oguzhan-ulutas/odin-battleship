import { player, computer, randomShipPlacer } from '../04-player/player.js';
import { randomPlacer, rotateButton, info } from './ship-placer-ui.js';
import { addContent } from '../01-building-blocks/building-blocks.js';

// Informs player about the ship
function shipInfo(ship) {
  addContent(
    info,
    `Place your ${player.ships[ship].type.toUpperCase()}.\nThe length of the ship is ${
      player.ships[ship].length
    } cells.`,
  );
}

// Rotates ship
let direction = 'horizontal';
function rotateShip() {
  rotateButton.addEventListener('click', () => {
    console.log(direction);
    direction === 'horizontal' ? (direction = 'vertical') : (direction = 'horizontal');
    console.log(direction);
  });
}

// Gets cell coordinates
let x;
let y;
let ship = 'carrier';

function shipChanger() {
  console.log(player.ships.carrier.boardCoordinates.length);
  if (player.ships.carrier.boardCoordinates.length === 0) {
    return;
  }
  if (player.ships.battleship.boardCoordinates.length === 0) {
    ship = 'battleship';
    return;
  }
  if (player.ships.cruiser.boardCoordinates.length === 0) {
    ship = 'cruiser';
    return;
  }
  if (player.ships.submarine.boardCoordinates.length === 0) {
    ship = 'submarine';
    return;
  }
  if (player.ships.destroyer.boardCoordinates.length === 0) {
    ship = 'destroyer';
    return;
  }
  console.log(ship);
}

const getDirection = () => direction;
const getX = () => x;
const getY = () => y;
const getShip = () => ship;

export default function playerShipPlacer() {
  // Placing computer ships
  randomShipPlacer(computer);

  shipInfo(ship);

  // Placing player ships randomly
  randomPlacer.addEventListener('click', () => {
    randomShipPlacer(player);
  });

  // Call rotate ships and getCellCoor
  rotateShip();

  // Letting user to place all ships
  const cells = document.querySelectorAll('[class^=cell]');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      x = Number(e.target.className[5]);
      y = Number(e.target.className[7]);

      if (getDirection() === 'horizontal' && x + player.ships[getShip()].length > 10) {
        alert('Invalid, the ship is out of the board. Please try again');
        return;
      }
      if (getDirection() === 'vertical' && y + player.ships[getShip()].length > 10) {
        alert('Invalid, the ship is out of the board. Please try again');
        return;
      }

      player.shipPlacer(getShip(), getX(), getY(), player.ships[getShip()].length, getDirection());
      shipChanger();
      shipInfo(getShip());
      console.log(player.ships);
      console.log(player.getAllShipCoor());
    });
  });
}
