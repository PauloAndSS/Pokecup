import Movimento from "./Movimento"
import Pokemon from "./Pokemon"

class PokeSetTime{
    private _id:number
    private _pokemon:Pokemon
    private _moveset:Movimento[]

    constructor(id:number,pokemon:Pokemon,moveset:Movimento[] = []){
        this._id = id;
        this._pokemon = pokemon;
        if(moveset === null){
            this._moveset = [];
        }else{
            this._moveset = [];
        }
    }

    get id():number{
        return this._id;
    }

    get pokemon():Pokemon{
        return this._pokemon;
    }

    get moveset():Movimento[]{
        return this._moveset.slice();
    }
}

export default PokeSetTime;