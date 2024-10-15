export class Ship {
    constructor(length) {
        this.length = length;
        this.ship = this.createShip();
    }

    createShip(){
        let shipArray = [];
        for(let i=0;i<this.length;i++)
        {
            shipArray.push({hit:false});
        }

        return shipArray;
    }

    hit(){
        for(let i=0;i<this.getShipLength();i++)
        {
            if(this.getShip()[i].hit===false)
            {
                this.getShip()[i].hit = true;
                return;
            }
        }
        return;
    }
    isSunk(){
        if(this.ship.every(this.checkHit))
        return true;
        else
        return false;
    }
    getShip(){
        return this.ship;
    }
    getShipLength(){
        return this.ship.length;
    }
    checkHit(obj){
        if(obj.hit===true){
            return true;
        }
        else
        return false;
    }
}
