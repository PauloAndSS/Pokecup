//API USADA : PokeApiV2

import { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from '../Model/Pokemon';

function PokemonAPIgallery (limit: number, offset: number) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
        const response = await axios.get(`${baseUrl}?limit=${limit}&offset=${offset}`);
        const basicList = response.data.results;

        const pokemonPromises = basicList.map(async (item: any) => {
          const detailResponse = await axios.get(item.url);
          const detail = detailResponse.data;

          const name = detail.name;
          const sprite = detail.sprites.front_default;
          const descryption = `Height: ${detail.height}, Weight: ${detail.weight}`;
          const types = detail.types.map((t: any) => t.type.name);

          return new Pokemon(name, sprite, descryption, types);
        });

        const fullPokemonList = await Promise.all(pokemonPromises);
        setPokemons(fullPokemonList);
      } catch (error) {
        console.error('Erro ao buscar Pokemons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [limit, offset]);
  return { pokemons, loading };
};

function PokemonAPIsearchName(query: string) {
  const [results, setResults] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const allPokemons = PokemonAPIgallery(10000,0).pokemons;

        const filtered = allPokemons.filter((p: any) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        );

        const pokemons = await Promise.all(filtered.map(async (item: any) => {
          const detailRes = await axios.get(item.url);
          const data = detailRes.data;
          return new Pokemon(
            data.name,
            data.sprites.front_default,
            `Height: ${data.height}, Weight: ${data.weight}`,
            data.types.map((t: any) => t.type.name)
          );
        }));

        setResults(pokemons);
      } catch (error) {
        console.error('Erro na busca parcial:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [query]);

  return { results, loading };
}

function PokemonAPIsearchType(query: string[]) {
  const [results, setResults] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
    }else{

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const allPokemons = PokemonAPIgallery(10000,0).pokemons;

        const filtered = allPokemons.filter((p: any) =>{
          for(let i=0;i<query.length;i++){
            return p.Types()[i].toLowerCase().includes(query[i].toLowerCase())
          }
        }
        );

        const pokemons = await Promise.all(filtered.map(async (item: any) => {
          const detailRes = await axios.get(item.url);
          const data = detailRes.data;
          return new Pokemon(
            data.name,
            data.sprites.front_default,
            `Height: ${data.height}, Weight: ${data.weight}`,
            data.types.map((t: any) => t.type.name)
          );
        }));

        setResults(pokemons);
      } catch (error) {
        console.error('Erro na busca parcial:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestions();
    }
  }, [query]);

  return { results, loading };
}


export {PokemonAPIgallery,PokemonAPIsearchName,PokemonAPIsearchType};