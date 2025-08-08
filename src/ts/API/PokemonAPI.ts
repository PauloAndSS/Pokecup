import axios, { AxiosResponse } from "axios";
import Movimento from "../model/Movimento";
import Pokemon from "../model/Pokemon";
import Item from "../model/Item";

async function PokemonAPI(limit: number, offset: number):Promise<Pokemon[]>{
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const pokemonList = response.data.results;

    const pokemonsData = await Promise.all(pokemonList.map(async (pokemon : {name:string, url:string})=>{
      const detailsResponse = await axios.get(pokemon.url);
      const { name, types,sprites,id } = detailsResponse.data;
      const typesList = types.map((type: any) => type.type.name);
      const sprite = sprites.front_default;
      return new Pokemon(pokemon.url,name, typesList, sprite,id);
    }));

    return pokemonsData;
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
    return [];
  }
}

async function MovesAPI(pokemonName: string):Promise<Movimento[]>{
   try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const movesList = response.data.moves;
    const movesData = await Promise.all(
      movesList.map(async (move: { move: { name: string, url: string } }) => {
        const moveDetailsResponse = await axios.get(move.move.url);
        const { name, power, effect_entries} = moveDetailsResponse.data;
        const effect = effect_entries.find((entry: any) => entry.language.name === 'en')?.effect || 'No effect description available';
        return new Movimento(move.move.url,name,power,effect);
      }));
    return movesData;
  } catch (error) {
    console.error('Erro ao buscar os movimentos do Pokémon:', error);
    return [];
  }
}

async function allMovesAPI(limit:number){
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/move?limit=${limit}`);
    const movesList = response.data.results;
    const movesData = await Promise.all(
      movesList.map(async ( move: { name: string, url: string }) => {
        const moveDetailsResponse = await axios.get(move.url);
        const { name, power, effect_entries} = moveDetailsResponse.data;
        const effect = effect_entries.find((entry: any) => entry.language.name === 'en')?.effect || 'No effect description available';
        return new Movimento(move.url,name,power,effect);
      }));
    return movesData;
  } catch (error) {
    console.error('Erro ao buscar os movimentos do Pokémon:', error);
    return [];
  }
}

async function ItensAPI(limit:number){
  try{
    const response = await axios.get(`https://pokeapi.co/api/v2/item?limit=${limit}`);
    const itensList = response.data.results;
    const itensData = await Promise.all(
      itensList.map(async (item: { name: string; url: string }) => {
        const itensDetailsResponse = await axios.get(item.url);
        const { name, effect_entries, sprites } = itensDetailsResponse.data;
        const effect = effect_entries.find((entry: any) => entry.language.name === 'en')?.effect || 'No effect description available';
        const sprite = sprites?.default || '';
        return new Item(item.url,name,effect,sprite);
      }));
    return itensData;
  }catch(error){
    console.error('Erro ao buscar os itens:', error);
    return [];
  }
}



export {PokemonAPI,MovesAPI,ItensAPI,allMovesAPI};