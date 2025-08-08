import ElementoPokemon from "../model/ElementoPokemon";
import Item from "../model/Item";
import Movimento from "../model/Movimento";
import Pokemon from "../model/Pokemon";
import RespositorioGeral from "./RepositorioGeral";

class SearchElementoPoke{
    static apenasPokemons(repositorio:RespositorioGeral):Pokemon[]{
        let galeria = repositorio.repositorio;
        const filtrarPokemons = galeria.filter(i => i instanceof Pokemon);
        return (filtrarPokemons as Pokemon[]);
    }

    static apenasItens(repositorio:RespositorioGeral):Item[]{
        let galeria = repositorio.repositorio;
        const filtrarItens = galeria.filter(i => i instanceof Item);
        return (filtrarItens as Item[]);
    }

    static apenasMovimentos(repositorio:RespositorioGeral):Movimento[]{
        let galeria = repositorio.repositorio;
        const filtrarMovimentos = galeria.filter(i => i instanceof Movimento);
        return (filtrarMovimentos as Movimento[]);
    }

    static pesquisar(repositorio:ElementoPokemon[], filtros:{tipo:string,parametro:string}[] = [],elementoEsp:string = ""):ElementoPokemon[]{
        return repositorio.filter(elemento =>{
            let results = filtros.map(filtro => elemento.filtre(filtro))
            if(!results.includes(false)){
                return elemento;
            }
        });
    }
}

export default SearchElementoPoke;