import { JSX } from "react";
import { Pokemon } from "../../../ts/Model/Pokemon";
import style from './Card.module.css';
import { sessionAddPokemonTeam, sessionRemovePokemonTeam } from "../../../ts/Storage/Session";
import TeamPokemon from "../../../ts/Model/TeamPokemon";

type CardsPokemonProps = {
    pokemon: Pokemon;
    index: number;
}

export function CardsPokemon(props:CardsPokemonProps): JSX.Element {
    const pokemon = props.pokemon;
    const index = props.index;

    function getTypeColor(type: string): string {
        switch (type) {
            case 'fire':
                return '#F08030';
            case 'water':
                return '#6890F0';
            case 'grass':
                return '#78C850';
            case 'electric':
                return '#F8D030';
            case 'psychic':
                return '#F85888';
            case 'ice':
                return '#98D8D8';
            case 'dragon':
                return '#7038F8';
            case 'dark':
                return '#705848';
            case 'fairy':
                return '#EE99AC';
            case 'fighting':
                return '#C03028';
            case 'flying':
                return '#A890F0';
            case 'poison':
                return '#A040A0';
            case 'ground':
                return '#E0C068';
            case 'rock':
                return '#B8A038';
            case 'bug':
                return '#A8B820';
            case 'ghost':
                return '#705898';
            case 'steel':
                return '#B8B8D0';
            default:
                return '#A8A878'; // Normal type
        }
    };
  return (
    <div key={index} className={style.cardPokemon}>
          <img src={pokemon.getSprite()} alt={pokemon.getName()} />
          <h2>{pokemon.getName()}</h2>
          <div className={style.types}>
            {pokemon.getType().map((type, typeIndex) => (
              <span key={typeIndex} className={style.pokemon} style={{ backgroundColor: getTypeColor(type) }}>
                {type}
              </span>
            ))}
          </div>
    </div>
  );
}

type CardMovesProps = {
    move: string
    index: number;
};

export function CardMoves(props: CardMovesProps): JSX.Element {
    const move = props.move;
    const index = props.index;
  return (
    <div key={index} className={style.cardMove}>
          <h3>{move}</h3>
    </div>
  );
}