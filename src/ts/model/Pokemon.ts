import IPesquisavel from "../Interfaces/IPesquisavel";
import ElementoPokemon from "./ElementoPokemon";

class Pokemon extends ElementoPokemon implements IPesquisavel{
    private _tipos:string[]
    private _sprite:string
    private _numPokedex:number

    constructor(urldetails:string,nomeElemento:string,tipos:string[],sprite:string,numPokedex:number){
        super(urldetails,nomeElemento);
        this._tipos = tipos;
        this._sprite = sprite;
        this._numPokedex = numPokedex;
    }

    get tipos():string[]{
        return this._tipos.slice()
    }

    get sprite():string{
        return this._sprite;
    }

    get numPokedex():number{
        return this._numPokedex;
    }

    filtre(filtro:{tipo:string,parametro:string}):boolean{
        switch(filtro.tipo){
            case"nome": 
                if(this.nome.includes(filtro.parametro)){
                return true
                }else{
                    return false
                }
            case"tipo":
                if(this.tipos.includes(filtro.parametro)){
                    return true
                }else{
                    return false
                }
            break;
            default:
                return false
        }
    }

    toString():string{
        return `
            Movimento :\n
            Nome : ${super.nomeElemento()}\n
            Sprite : ${this.sprite}\n
            Tipos :\n ${this.tipos.map(tipo =>{return `${tipo}\n`})}
        `;
    }
}

export default Pokemon;