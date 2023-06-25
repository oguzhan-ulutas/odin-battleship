// This module manages to place ships of the player
import {
  newElementCreator,
  addClass,
  addContent,
  appendElement,
  elementSelector,
} from '../01-building-blocks/building-blocks.js';
import { mainContainer } from '../05-main-page-creator/main-page-creator.js';

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
  for (let i = 0; i < 10; i++) {
    for (let j = 9; j >= 0; j--) {
      const cell = newElementCreator('div');
      addClass(cell, `cell-${i}-${j}`);
      board.prepend(cell);
    }
  }
}
divCreator();

export const randomPlacer = newElementCreator('button');
addClass(randomPlacer, 'ship-placer-random-all');
addContent(randomPlacer, 'Repalace all the ships randomly');

const startButton = newElementCreator('button');
addClass(startButton, 'ship-placer-start');
addContent(startButton, 'Start Game');

appendElement(container, header, info, rotateButton, board, randomPlacer, startButton);

export default function shipPlacerBoard() {
  appendElement(mainContainer, container);
}