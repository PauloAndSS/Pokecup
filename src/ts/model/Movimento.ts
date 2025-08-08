import IPesquisavel from "../Interfaces/IPesquisavel";
import ElementoPokemon from "./ElementoPokemon";

class Movimento extends ElementoPokemon{
    private _dano:number;
    private _efeito:string;

    constructor(urldetails:string,nomeElemento:string,dano:number,efeito:string){
        super(urldetails,nomeElemento);
        this._dano = dano;
        this._efeito = efeito;
    }

    get dano():number{
        return this._dano;
    }

    get efeito():string{
        return this._efeito;
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

    toString():string{
        return `
            Movimento :\n
            Nome : ${super.nomeElemento()}\n
            Dano : ${this.dano}\n
            Efeito : ${this.efeito}
        `;
    }
}

export default Movimento;