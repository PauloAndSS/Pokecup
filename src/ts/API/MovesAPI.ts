import axios from 'axios';
import Moves from '../Model/Moves';

async function MovesAPI(pokemonName: string) {
   try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const movesList = response.data.moves;

    const movesData = await Promise.all(
      movesList.map(async (move: { move: { name: string, url: string } }) => {
        const moveDetailsResponse = await axios.get(move.move.url);
        const { name, type, damage_class, power, accuracy, pp, effect_entries, priority } = moveDetailsResponse.data;

        const effect = effect_entries.find((entry: any) => entry.language.name === 'en')?.effect || 'No effect description available';
        return new Moves(
          name,
          type.name,
          damage_class.name,
          power ?? 0,
          accuracy ?? 0,
          pp,
          effect,
          priority
        );
      })
    );

    return movesData;
  } catch (error) {
    console.error('Erro ao buscar os movimentos do Pokémon:', error);
    return [];
  }
}

export default MovesAPI;