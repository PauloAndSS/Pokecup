
import React from "react";
import { useState,useEffect } from "react";
import {PokemonAPIgallery} from "../../../API/PokemonAPI";
import CardsPoke from "../CardsPokemons/CardsPoke";
import Style from "./GalleryPokemons.module.css";

type GalleryPokemonProps = {
    limit:React.ReactNode
    set:React.ReactNode
}

function GalleryPokemon(props: GalleryPokemonProps) {
  const [limitState] = useState(props.limit as number);
  const [setState, setSetState] = useState(props.set as number);

  useEffect(() => {
    setSetState(props.set as number);
  }, [props.set]);

  const pokelist = PokemonAPIgallery(limitState, setState);

  const nextPage = () => {

    setSetState((prev) => prev + 15);
  };

  const prevPage = () => {
    setSetState((prev) => Math.max(0, prev - 15));
  };

  return (
    <div className={Style.GalleryPokemon}>
      <div className={Style.gallerry}>
        {
          pokelist.pokemons.map((pokemon): React.ReactNode => {
            return (
              <CardsPoke nome={pokemon.Name()} tipos={pokemon.Types()} urlImg={pokemon.Sprite()}/>
            )
          })
        }
      </div>
      
      <div className={Style.pages}>
        <button onClick={prevPage} disabled={setState === 0}>
            Anterior
        </button>
        <span>
          Página {Math.floor(setState / 15) + 1}
        </span>
        <button onClick={nextPage}>
            Próximo
        </button>
      </div>
    </div>
  );
}

export default GalleryPokemon;