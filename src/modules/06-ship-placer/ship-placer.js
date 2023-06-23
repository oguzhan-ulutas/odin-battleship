// This module manages to place ships of the player
import { newElementCreator, addClass, addContent } from '../01-building-blocks/building-blocks.js';

const container = newElementCreator('div');
addClass(container, 'ship-placer-container');

const header = newElementCreator('div');
addClass(header, 'ship-placer-header');
addContent(header, 'Welcome to Battleship');

const info = newElementCreator('div');
addClass(info, 'ship-placer-info');

const rotateButton = newElementCreator('button');
addContent(rotateButton, 'Rotate');

const board = newElementCreator('div');
addClass(board, 'ship-placer-board');

function boardCreator() {}
