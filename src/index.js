import {Ship} from "./Ship.js"
import {Gameboard} from "./gameboard.js"
import {Player} from "./player"
console.log('hello tushar');

const human = new Player("human");
const comp = new Player("computer");

human.placeAutoShips();
comp.placeAutoShips();

console.log(human.getBoard());
console.log(comp.getBoard());
