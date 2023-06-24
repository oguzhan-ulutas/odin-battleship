// This module manages to place ships of the player
import {
  newElementCreator,
  addClass,
  addContent,
  appendElement,
  elementSelector,
} from '../01-building-blocks/building-blocks.js';
import { mainContainer } from '../05-main-page-creator/main-page-creator.js';
import { player, computer } from '../04-player/player.js';

const container = newElementCreator('div');
addClass(container, 'ship-placer-container');

const header = newElementCreator('div');
addClass(header, 'ship-placer-header');
addContent(header, 'Welcome to Battleship');

const info = newElementCreator('div');
addClass(info, 'ship-placer-info');
addContent(info, 'Place your ship');

const rotateButton = newElementCreator('button');
addClass(rotateButton, 'ship-placer-rotate');
addContent(rotateButton, 'Rotate the ship');

const board = newElementCreator('div');
addClass(board, 'ship-placer-board');

function divCreator() {
  const className = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 9; j >= 0; j--) {
      const cell = newElementCreator('div');
      addClass(cell, `cell-${i}-${j}`);
      board.prepend(cell);
    }
  }
}
divCreator();

const randomPlacer = newElementCreator('button');
addClass(randomPlacer, 'ship-placer-random-all');
addContent(randomPlacer, 'Repalace all the ships randomly');

const startButton = newElementCreator('button');
addClass(startButton, 'ship-placer-start');
addContent(startButton, 'Start Game');

appendElement(container, header, info, rotateButton, board, randomPlacer, startButton);

// Informs player about the ship
function shipInfo(ship) {
  addContent(
    info,
    `Place your ${player.ships[ship].name}. The length of the ship is ${player.ships[ship].length} cells`,
  );
}

// Rotates ship
let direction = 'horizontal';
function rotateShip() {
  rotateButton.addEventListener('click', (e) => {
    console.log(e);
    if (direction === 'horizontal') {
      direction = 'vertical';
    } else {
      direction = 'horizontal';
    }
  });
}

// Gets cell coordinates
let x = 0;
let y = 0;
function getCellCoordinates() {
  const cells = document.querySelectorAll('[class^=cell]');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      x = Number(e.target.className[5]);
      y = Number(e.target.className[7]);
      console.log(x, y);
    });
  });
  console.log(x, y);
}

export default function shipPlacerBoard() {
  appendElement(mainContainer, container);
  shipInfo('carrier');
  rotateShip();
  getCellCoordinates();
}

console.log(player.ships);
