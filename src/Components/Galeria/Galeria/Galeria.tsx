import { useEffect, useState } from "react";
import SearchElementoPoke from "../../../ts/controller/SearchElementoPoke";
import { allMovesAPI, ItensAPI, PokemonAPI } from "../../../ts/API/PokemonAPI";
import RespositorioGeral from "../../../ts/controller/RepositorioGeral";
import CardPokemon from "../../Cards/CardPokemon/CardPokemon";
import Style from "./Galeria.module.css";
import ElementoPokemon from "../../../ts/model/ElementoPokemon";
import Pokemon from "../../../ts/model/Pokemon";
import CardItem from "../../Cards/CardItemPoke/CardItemPoke";
import CardMovimento from "../../Cards/CardMovimento/CardMovimento";
import Movimento from "../../../ts/model/Movimento";
import Item from "../../../ts/model/Item";

type BtControlProps = {
  name: string;
  onClick: () => void;
};

function ButtonPageNav(props: BtControlProps) {
  return (
    <button className={Style.btPageControl} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

type FiltrosGaleriaProps = {
  onFilterChange: (tipo: string, parametro: string) => void;
  onClearFilters: () => void;
};

function FiltrosGaleria({ onFilterChange, onClearFilters }: FiltrosGaleriaProps) {
  const tipos: string[] = [
    "bug", "dark", "dragon", "electric", "fairy", "fighting", "fire",
    "flying", "ghost", "grass", "ground", "ice", "normal", "poison",
    "psychic", "rock", "steel", "water"
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("tipo", e.target.value);
  };

  return (
    <div className={Style.filtrosContainer}>
      <select onChange={handleSelectChange} className={Style["filtroSelect"]}>
        <option value="">select type</option>
        {tipos.map((tipo, idx) => (
          <option key={idx} value={tipo}>{tipo}</option>
        ))}
      </select>
      <button onClick={onClearFilters} className={Style["filtroButton"]}>
        Remover filtros
      </button>
    </div>
  );
}

// Novo tipo de visualização
type ViewMode = "pokemon" | "itens" | "movimentos";

function Galeria() {
  const [elementos, setElementos] = useState<RespositorioGeral>(new RespositorioGeral());
  const [filteredElementos, setFilteredElementos] = useState<ElementoPokemon[]>([]);
  const [filtros, setFiltros] = useState<{ tipo: string; parametro: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("pokemon");
  const limit = 15;

  const fetchPokemons = async () => {
    try {
      const repositorio = new RespositorioGeral();
      repositorio.addElementos(await PokemonAPI(10000, 0));
      repositorio.addElementos(await ItensAPI(200));
      repositorio.addElementos(await allMovesAPI(400));
      setElementos(repositorio);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os Pokémons:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    const filtrosValidos = filtros.filter(f => {
      if (f.tipo === "nome") return f.parametro.length >= 3;
      return f.parametro !== "";
    });

    if (filtrosValidos.length > 0 && viewMode === "pokemon") {
      const resultado = SearchElementoPoke.pesquisar(elementos.repositorio, filtrosValidos);
      setFilteredElementos(resultado);
      setPage(0);
    } else {
      setFilteredElementos([]);
    }
  }, [filtros, elementos, viewMode]);

  const handleFilterChange = (tipo: string, parametro: string) => {
    setFiltros((prev) => {
      const outros = prev.filter(f => f.tipo !== tipo);
      return parametro === "" ? outros : [...outros, { tipo, parametro }];
    });
  };

  const handleClearFilters = () => {
    setFiltros([]);
    setPage(0);
  };

  const getElementosAtuais = () => {
    if (viewMode === "pokemon") {
      return filteredElementos.length > 0
        ? SearchElementoPoke.apenasPokemons(new RespositorioGeral(filteredElementos))
        : SearchElementoPoke.apenasPokemons(elementos);
    }

    if (viewMode === "itens") {
      return SearchElementoPoke.apenasItens(elementos);
    }

    if (viewMode === "movimentos") {
      return SearchElementoPoke.apenasMovimentos(elementos);
    }

    return [];
  };

  const elementosParaExibir = getElementosAtuais();
  const totalPages = Math.ceil(elementosParaExibir.length / limit);
  const elementosPaginados = elementosParaExibir.slice(page * limit, (page + 1) * limit);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(prev => prev + 1);
  };

  const handleBack = () => {
    if (page > 0) setPage(prev => prev - 1);
  };

  const handleViewChange = (modo: ViewMode) => {
    setViewMode(modo);
    setPage(0);
    setFiltros([]);
    setFilteredElementos([]);
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className={Style.galeria}>
      <div className={Style["viewButtons"]}>
        <button onClick={() => handleViewChange("pokemon")}>Pokémons</button>
        <button onClick={() => handleViewChange("itens")}>Itens</button>
        <button onClick={() => handleViewChange("movimentos")}>Movimentos</button>
      </div>

      {viewMode === "pokemon" && (
        <FiltrosGaleria
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />
      )}

      <div className={Style.cardsGaleria}>
        {viewMode === "pokemon" &&
          (elementosPaginados as Pokemon[]).map((pokemon, idx) => (
            <CardPokemon key={idx} pokemon={pokemon} />
        ))}

        {viewMode === "itens" &&
          (elementosPaginados as Item[]).map((item, idx) => (
            <CardItem key={idx} item={item} />
        ))}

        {viewMode === "movimentos" &&
          (elementosPaginados as Movimento[]).map((move, idx) => (
            <CardMovimento key={idx} movimento={move} />
        ))}

      </div>

      <div className={Style.pagination}>
        <ButtonPageNav name="Back" onClick={handleBack} />
        <span>
          Página {page + 1} de {totalPages}
        </span>
        <ButtonPageNav name="Next" onClick={handleNext} />
      </div>
    </div>
  );
}

export default Galeria;

/*
<div>Total de elementos: {elementos.repositorio.length}</div>
        <div>
          <h2>Pokemons</h2>
          {
          SearchElementoPoke.apenasPokemons(elementos).map(pokemon=>{
            return (<><a>{pokemon.nome}</a><br/></>);
          })
          }
          <h2>Itens</h2>
          {
            SearchElementoPoke.apenasItens(elementos).map(item=>{
            return (<><a>{item.nome}</a><br/></>);
          })
          }
          <h2>Movimentos</h2>
          {
            SearchElementoPoke.apenasMovimentos(elementos).map(move=>{
            return (<><a>{move.nome}</a><br/></>);
          })
          }
          <h2>Filtrado pelo nome Pik</h2>
          {
            SearchElementoPoke.pesquisar(elementos.repositorio,[{tipo:"tipo",parametro:"normal"}]).map(
              elemnto =>{
                return (<><a>{elemnto.nome}</a><br/></>);
              }
            )
          }
        </div>
*/