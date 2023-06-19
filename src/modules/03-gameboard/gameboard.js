import ShipFactory from "../02-ship-factory/ship-factory";

export default const Gameboard = ()=>{
    // Creating ships
    const carrier = ShipFactory(5);
    const battleship = ShipFactory(4);
    const cruiser = ShipFactory(3);
    const submarine = ShipFactory(3);
    const destroyer = ShipFactory(2);
}

// Create an instance for test purposes
const testGameboard = Gameboard()
module.exports = testGameboard;