import { Ship } from "./Ship";
export class Gameboard{
    constructor(){
        this.gameBoardArray = this.createGameboard();
    }

    createGameboard(){
        let board = [];
        for(let i=0;i<100;i++)
        {
            board.push({hit: false,shipStatus:null});
        }
        return board;
    }
    recieveAttack(coords){
        this.getBoard()[coords].hit = true;
        if(this.getBoard()[coords].shipStatus)
        {
            this.getBoard()[coords].shipStatus.hit();
        }
        if(this.allShipsSunk())
        {
            console.log('all ships have sunk');
        }
    }
    placeShips(ship,coords){
        if(this.checkValidPlacement(ship,coords))
       { 
            for(let i =0;i<ship.getShipLength();i++)
            {
                this.getBoard()[coords+i].shipStatus=ship;
            }
            console.log(`ship placed at ${coords}`);
    }
    else
    return;
    }
    checkValidPlacement(ship,coords){
        let num = Number(coords)%10;
        if(num+ship.getShipLength()>9)
        return false;
        for(let i=0;i<ship.getShipLength();i++)
        {
            if(this.getBoard()[Number(coords)+i].shipStatus !==null)
            {
                return false;
            }
        }
        return true;
    }
    allShipsSunk(){
        for(let cell of this.getBoard())
        {
            if(cell.shipStatus !==null && cell.hit===false)
            {
                return false;
            }
        }
        return true;
    }
    getBoard(){
        return this.gameBoardArray;
    }
}