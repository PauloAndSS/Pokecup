import ElementoPokemon from "../model/ElementoPokemon";

class RespositorioGeral{
    private _repositorio:ElementoPokemon[];
    
    constructor(repositorio:ElementoPokemon[] = []){
        this._repositorio = repositorio
    }

    get repositorio():ElementoPokemon[]{
        return this._repositorio.slice();
    }

    set repositorio(repositorio:ElementoPokemon[]){
        this._repositorio = repositorio
    }

    addElementos(elementos: ElementoPokemon[]) {
    this._repositorio.push(... elementos);
    }
}

export default RespositorioGeral;