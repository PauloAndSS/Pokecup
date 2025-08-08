import { JSX } from "react";
import Pokemon from "../../../ts/model/Pokemon"
import Style from "./CardPokemon.module.css";

function CardPokemon({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className={Style.cardPokemon}>
      <div className={Style.divImg}>
        <img src={pokemon.sprite} alt={pokemon.nome} />
      </div>
      <div className={Style.divDetails}>
        <h2>{pokemon.nome}</h2>
        <div className={Style.divTipos}>
          {pokemon.tipos.map(tipo => (
            <h3 key={tipo} className={Style[`tipo-${tipo.toLowerCase()}`]}>
              {tipo}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CardPokemon;