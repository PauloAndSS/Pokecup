import ElementoPokemon from "./ElementoPokemon";

class Item extends ElementoPokemon{
    private _efeito:string;
    private _sprite:string;

    constructor(urldetails:string,nomeElemento:string,efeito:string,sprite:string){
        super(urldetails,nomeElemento);
        this._efeito = efeito;
        this._sprite = sprite
    }

    get efeito():string{
        return this._efeito;
    }

    get sprite():string{
        return this._sprite;
    }

    filtre(filtro:{tipo:string,parametro:string}):boolean{
        switch(filtro.tipo){
            case"nome": 
                if(this.nome.includes(filtro.parametro)){
                return true
                }else{
                    return false
                }
            case"efeito":
                if(this.efeito.includes(filtro.parametro)){
                    return true
                }else{
                    return false
                }
            break;
            default:
                return false
        }
    }
}

export default Item;