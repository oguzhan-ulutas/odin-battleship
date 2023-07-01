import './style.css';
import { mainPageCreator } from './modules/05-main-page-creator/main-page-creator.js';
import shipPlacerBoard from './modules/06-ship-placer/ship-placer-ui.js';
import playerShipPlacer from './modules/06-ship-placer/ship-placer-logic.js';
import gamePageLogic from './modules/07-game-page/game-page-logic.js';

mainPageCreator();
shipPlacerBoard();
playerShipPlacer();
