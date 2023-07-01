import { player, computer, computerAttack, receiveAttack } from '../04-player/player.js';
import { arrayIncludes, addClass } from '../01-building-blocks/building-blocks.js';

function areAllShipsSunk(player) {
  if (
    player.ships.carrier.getWracked() &&
    player.ships.battleship.getWracked() &&
    player.ships.cruiser.getWracked() &&
    player.ships.submarine.getWracked() &&
    player.ships.destroyer.getWracked()
  ) {
    alert('Congrats!!! You won!!!');
  }
}

export default function gamePageLogic() {
  const playerCells = document.querySelectorAll('[class^="cell-player"]');
  const computerCells = document.querySelectorAll('[class^="cell-computer"]');

  computerCells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      // Get the cell coordinates
      const x = e.target.className[14];
      const y = e.target.className[16];
      computer.receiveAttack(x, y);

      // Coloring to computerBoard
      if (arrayIncludes([x, y], computer.getAllShipCoor())) {
        addClass(cell, 'has-ship');
      } else {
        addClass(cell, 'attacked');
      }

      // Checking are all the ships wracked
      areAllShipsSunk(computer);

      // Computer attacking
      computerAttack();
    });
  });
}
