import { Gameboard } from "./gameboard";

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
    
}