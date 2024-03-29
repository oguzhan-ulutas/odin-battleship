// This module manages to place ships of the player
import {
  newElementCreator,
  addClass,
  addContent,
  appendElement,
} from '../01-building-blocks/building-blocks.js';
import { mainContainer } from '../05-main-page-creator/main-page-creator.js';

const container = newElementCreator('div');
addClass(container, 'ship-placer-container');

const header = newElementCreator('div');
addClass(header, 'ship-placer-header');
addContent(header, 'Welcome to Battleship');

export const info = newElementCreator('div');
addClass(info, 'ship-placer-info');
addContent(info, 'Place your ship');

export const rotateButton = newElementCreator('button');
addClass(rotateButton, 'ship-placer-rotate');
addContent(rotateButton, 'Rotate the ship');

const board = newElementCreator('div');
addClass(board, 'ship-placer-board');

export function divCreator(container, keyword) {
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < 10; j++) {
      const cell = newElementCreator('div');
      if (keyword) {
        addClass(cell, `cell-${keyword}-${j}-${i}`);
      } else {
        addClass(cell, `cell-${j}-${i}`);
      }

      appendElement(container, cell);
    }
  }
}
divCreator(board);

export const randomPlacer = newElementCreator('button');
addClass(randomPlacer, 'ship-placer-random-all');
addContent(randomPlacer, 'Repalace all the ships randomly');

appendElement(container, header, info, rotateButton, board, randomPlacer);

export default function shipPlacerBoard() {
  appendElement(mainContainer, container);
}
