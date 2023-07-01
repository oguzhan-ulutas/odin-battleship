import { player, computer, computerAttack } from '../04-player/player.js';
import { arrayIncludes, addClass } from '../01-building-blocks/building-blocks.js';

function areAllShipsSunk() {
  if (
    computer.ships.carrier.getWracked() &&
    computer.ships.battleship.getWracked() &&
    computer.ships.cruiser.getWracked() &&
    computer.ships.submarine.getWracked() &&
    computer.ships.destroyer.getWracked()
  ) {
    alert('You won!!! Refresh for new game.');
  } else if (
    player.ships.carrier.getWracked() &&
    player.ships.battleship.getWracked() &&
    player.ships.cruiser.getWracked() &&
    player.ships.submarine.getWracked() &&
    player.ships.destroyer.getWracked()
  ) {
    alert('Computer won!!! Refresh for new game.');
  }
}

function playerBoardHit() {
  const shots = player.getShots();
  shots.forEach((shot) => {
    const className = `.cell-player-${shot[0]}-${shot[1]}`;
    const cell = document.querySelector(className);
    addClass(cell, 'got-shot');
  });
}

export default function gamePageLogic() {
  const computerCells = document.querySelectorAll('[class^="cell-computer"]');

  computerCells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      // Get the cell coordinates
      const x = e.target.className[14];
      const y = e.target.className[16];
      if (!arrayIncludes([x, y], computer.getShots())) {
        computer.receiveAttack(x, y);

        // Coloring to computerBoard
        if (arrayIncludes([x, y], computer.getAllShipCoor())) {
          addClass(cell, 'has-ship');
        } else {
          addClass(cell, 'attacked');
        }

        // Checking are all the ships wracked
        areAllShipsSunk();

        // Computer attacking
        computerAttack();
        playerBoardHit();

        areAllShipsSunk();
      }
    });
  });
}
