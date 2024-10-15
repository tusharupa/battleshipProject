import {Ship} from "./Ship.js"
import {Gameboard} from "./gameboard.js"
console.log('hello tushar');
let gameboard = new Gameboard();
let ship1 = new Ship(4);
let ship2 = new Ship(2);
console.log(gameboard);
gameboard.placeShips(ship1,21);
gameboard.placeShips(ship2,12);
gameboard.recieveAttack(21);
gameboard.recieveAttack(24);
gameboard.recieveAttack(22);
gameboard.recieveAttack(23);
gameboard.recieveAttack(12);
gameboard.recieveAttack(13);
gameboard.recieveAttack(21);
