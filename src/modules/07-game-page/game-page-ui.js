import {
  appendElement,
  newElementCreator,
  addClass,
  elementSelector,
} from '../01-building-blocks/building-blocks.js';
import { mainContainer } from '../05-main-page-creator/main-page-creator.js';
import { divCreator } from '../06-ship-placer/ship-placer-ui.js';
import { player } from '../04-player/player.js';

const playerBoard = newElementCreator('div');
const computerBoard = newElementCreator('div');

function placeShipToDom(array) {
  for (let i = 0; i < array.length; i++) {
    const cellClass = `.cell-player-${array[i].join('-')}`;
    const cell = elementSelector(cellClass);
    addClass(cell, 'has-ship');
  }
}

export default function gamePageUICreator() {
  addClass(playerBoard, 'ship-placer-board', 'player-board');
  addClass(computerBoard, 'ship-placer-board', 'computer-board');
  addClass(mainContainer, 'game-mode');
  appendElement(mainContainer, playerBoard, computerBoard);

  divCreator(playerBoard, 'player');
  divCreator(computerBoard, 'computer');

  // Show player ships on the board
  placeShipToDom(player.getAllShipCoor());
}
