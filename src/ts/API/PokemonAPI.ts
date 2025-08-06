import axios from 'axios';
import { Pokemon, status } from '../Model/Pokemon';

async function PokemonAPI(limit: number, offset: number) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const pokemonList = response.data.results;

    const pokemonsData = await Promise.all(
      pokemonList.map(async (pokemon: { name: string, url: string }) => {
        const detailsResponse = await axios.get(pokemon.url);
        const { name, types, stats, abilities, sprites } = detailsResponse.data;

        const baseStats: status = {
          HP: stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
          ATACK: stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
          DEFENSE: stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
          SPECIAL_ATTACK: stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
          SPECIAL_DEFENSE: stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat,
          SPEED: stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
        };

        const abilitiesList = abilities.map((ability: any) => ability.ability.name);
        const typesList = types.map((type: any) => type.type.name);
        const sprite = sprites.front_default;

        return new Pokemon(name, typesList, baseStats, abilitiesList, sprite);
      })
    );

    return pokemonsData;
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
    return [];
  }
}

export default PokemonAPI;