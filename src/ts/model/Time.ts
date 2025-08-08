import PokeSetTime from "./PokeSetTime";

class Time{
    private _idTime:number;
    private _nomeTime:string;
    private _pokemons:PokeSetTime[];

    constructor(id:number,nomeTime:string,pokemons:PokeSetTime[]=[]){
        this._idTime = id;
        this._nomeTime = nomeTime;
        if(pokemons === null){
            this._pokemons = [];
        }else{
            this._pokemons = pokemons;
        }
    }
    
    get idTime():number{
        return this._idTime;
    }

    get nomeTime():string{
        return this._nomeTime
    }

    get pokemons():PokeSetTime[]{
        return this._pokemons.slice();
    }
}

export default Time;