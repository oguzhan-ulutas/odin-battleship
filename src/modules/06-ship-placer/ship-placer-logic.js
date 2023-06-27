import { player, computer, randomShipPlacer } from '../04-player/player.js';
import { randomPlacer, rotateButton, info } from './ship-placer-ui.js';
import {
  addClass,
  addContent,
  elementSelector,
  removeAllChildren,
} from '../01-building-blocks/building-blocks.js';
import { mainContainer } from '../05-main-page-creator/main-page-creator.js';

// Informs player about the ship
function shipInfo(ship) {
  addContent(
    info,
    `Place your ${player.ships[ship].type.toUpperCase()}.\nThe length of the ship is 
    ${player.ships[ship].length} cells.`,
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

// Gets cell coordinates and decide ship
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

function placeShipToDom(array) {
  for (let i = 0; i < array.length; i++) {
    const cellClass = `.cell-${array[i].join('-')}`;
    const cell = elementSelector(cellClass);
    addClass(cell, 'has-ship');
  }
}

// Checks if all ships placed, if so cleans main-content div

function areShipsPlaced() {
  if (
    player.getShipCoor('carrier').length &&
    player.getShipCoor('battleship').length &&
    player.getShipCoor('cruiser').length &&
    player.getShipCoor('submarine').length &&
    player.getShipCoor('destroyer').length
  ) {
    removeAllChildren(mainContainer);
  }
}

export default function playerShipPlacer() {
  // Placing computer ships
  randomShipPlacer(computer);

  shipInfo(ship);

  // Placing player ships randomly
  randomPlacer.addEventListener('click', () => {
    randomShipPlacer(player);
    areShipsPlaced();
  });

  // Call rotate ships and getCellCoor
  rotateShip();

  // Letting user to place all ships
  const cells = document.querySelectorAll('[class^=cell]');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      x = Number(e.target.className[5]);
      y = Number(e.target.className[7]);

      // Informs user if ship is out of range
      if (getDirection() === 'horizontal' && x + player.ships[getShip()].length > 10) {
        alert('Invalid, the ship is out of the board. Please try again');
        return;
      }
      if (getDirection() === 'vertical' && y + player.ships[getShip()].length > 10) {
        alert('Invalid, the ship is out of the board. Please try again');
        return;
      }

      player.shipPlacer(getShip(), getX(), getY(), player.ships[getShip()].length, getDirection());

      // Informs user if ships are overlapping. If user did not get out of board warning,
      // but still ship array is empty the only reason is overlapping.

      if (!player.ships[getShip()].boardCoordinates.length) {
        alert('The ships are overlapping. Please try again');
      }

      placeShipToDom(player.getShipCoor(getShip()));
      shipChanger();
      shipInfo(getShip());
      console.log(player.ships);
      areShipsPlaced();
    });
  });
}
