import {
  elementSelector,
  newElementCreator,
  addClass,
  addContent,
  appendElement,
  addHref,
} from '../01-building-blocks/building-blocks.js';

// Selecting main content div in the html
const content = elementSelector('#content');

// Creating header
const header = newElementCreator('div');
addClass(header, 'header');
addContent(header, 'BATTLESHIP');

// Creating main container div
export const mainContainer = newElementCreator('div');
addClass(mainContainer, 'main-container');

// Creating footer element
const footer = newElementCreator('div');
addClass(footer, 'footer');
addContent(footer, 'The Odin Project 2023 - Coded by ');

// Creating github link to my github page
const githubLink = newElementCreator('a');
addContent(githubLink, 'oguzhan-ulutas');
addHref(githubLink, 'https://github.com/oguzhan-ulutas');
appendElement(footer, githubLink);

export function mainPageCreator() {
  appendElement(content, header, mainContainer, footer);
}
