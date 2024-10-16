import { Gameboard } from "./gameboard";
import { Ship } from "./Ship";
export class Player{
    constructor(title)
    {
        this.title = title;
        this.turn = false;
        this.gameboard = new Gameboard();
    }
    getName(){
        return this.title;
    }
    getBoard(){
        return this.gameboard;
    }
    attack(coords,board){
        board.recieveAttack(coords);
    }

    placeAutoShips(){
        this.getBoard().placeShips(new Ship(4),12);
        this.getBoard().placeShips(new Ship(3),24);
        this.getBoard().placeShips(new Ship(2),44);
    }
    
}