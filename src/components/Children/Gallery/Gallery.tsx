import React, { JSX } from "react";
import { useState, useEffect } from "react";

import style from "./Gallery.module.css"; // CSS relacionado à galeria
import { Pokemon } from "../../../ts/Model/Pokemon";
import PokemonAPI from "../../../ts/API/PokemonAPI";
import { CardsPokemon } from "../Card/Card";
import Moves from "../../../ts/Model/Moves";
import MovesAPI from "../../../ts/API/MovesAPI";

function Gallery(props:{Element:React.ReactElement}): JSX.Element {
    let galleryContent = props.Element;
  return (
    <div className="gallery-container">
        {galleryContent}
    </div>
  );
}


// Filtro de Galeria
function GalleryFilter({ onApplyFilter }: { onApplyFilter: (filters: { name: string; type: string }) => void }) {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('');
  const types = ['fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel'];
  const handleApplyFilter = () => {
    onApplyFilter({ name: nameFilter, type: typeFilter });
  };

  return (
    <div className={style.filterContainer}>
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        className={style.filterInput}
      />
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className={style.filterSelect}
      >
        <option value="">Selecione o tipo</option>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button className={style.filterButton} onClick={handleApplyFilter}>
        Aplicar Filtros
      </button>
    </div>
  );
}

export function GalleryPokemon(props: { limit: number }): JSX.Element {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPokemons = async () => {
    try {
      const pokemonsData = await PokemonAPI(props.limit, 0);
      setPokemons(pokemonsData);
      setFilteredPokemons(pokemonsData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os Pokémons:", error);
      setLoading(false);
    }
  };

  const applyFilters = (filters: { name: string; type: string }) => {
    const { name, type } = filters;
    let filtered = [...pokemons];

    if (name) {
      filtered = filtered.filter(pokemon =>
        pokemon.getName().toLowerCase().includes(name.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter(pokemon =>
        pokemon.getType().includes(type)
      );
    }

    setFilteredPokemons(filtered);
    setCurrentPage(0);
  };

  const loadNextPage = () => {
    if ((currentPage + 1) * 15 < filteredPokemons.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const loadPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };
  const startIndex = currentPage * 15;
  const endIndex = startIndex + 15;
  const paginatedPokemons = filteredPokemons.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPokemons.length / 15);
  useEffect(() => {
    if (pokemons.length === 0) {
      fetchPokemons();
    }
  }, [pokemons.length]);

  if (loading) {
    return <div className={style.galleryPokemon}>Carregando...</div>;
  }
  return (
    <div>
      <GalleryFilter onApplyFilter={applyFilters} />
      <div className={style.galleryPokemon}>
        {paginatedPokemons.map((pokemon, index) => (
          <CardsPokemon key={index} pokemon={pokemon} index={index} />
        ))}
      </div>
      <div className={style.buttonContainer}>
        <button
          className={style.navButton}
          onClick={loadPreviousPage}
          disabled={currentPage === 0}
        >
          Voltar
        </button>
        <span>{`Página ${currentPage + 1} de ${totalPages}`}</span>
        <button
          className={style.navButton}
          onClick={loadNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}

export function GalleryMoves({ pokemonName }: { pokemonName: string }) {
    const [moves, setMoves] = useState<Moves[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const fetchPokemonMoves = async () => {
        try {
        const movesData = await MovesAPI(pokemonName);
        setMoves(movesData);
        setLoading(false);
        } catch (error) {
        console.error("Erro ao buscar os movimentos:", error);
        setLoading(false);
        }
    };
    useEffect(() => {
        fetchPokemonMoves();
    }, [pokemonName]);
    console.log("Moves:", moves);
    if (loading) {
        return <div>Carregando movimentos...</div>;
    }
}

export function GalleryTeamVGC(){
    return (
        <div className={style.galleryContainer}>
            <h2>Gallery Team VGC Component</h2>
            <p>This is a placeholder for the Gallery Team VGC component.</p>
        </div>
    )
}