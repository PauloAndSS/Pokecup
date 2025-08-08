import IPesquisavel from "../Interfaces/IPesquisavel";

abstract class ElementoPokemon implements IPesquisavel{
    private _urlDetails:string
    private _nome:string

    constructor(urldetails:string,nomeElemento:string){
        this._urlDetails = urldetails;
        this._nome = nomeElemento;
    }

    public get urlDetails():string{
        return this._urlDetails;
    }

    public get nome():string{
        return this._nome;
    }

    nomeElemento():string{
        return this._nome
    }

    filtre(filtro:{tipo:string,parametro:string}):boolean{
        if(filtro.tipo == "nome"){
            if(this.nome.includes(filtro.parametro)){
            return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
}

export default ElementoPokemon;