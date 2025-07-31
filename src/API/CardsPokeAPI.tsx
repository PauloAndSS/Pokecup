//API USADA : PokeApiV2

import { useEffect, useState } from 'react';
import axios from 'axios';
import CardsPokemon from '../Model/CardsPokemon';

async function CardsPokeAPI(){
    let limit = 10;
    try {
    const response = await axios.get('https://api.pokemontcg.io/v2/cards', {
    headers: {
        'X-Api-Key': '6c889381-a794-4d57-93eb-5ed1667050b0',
    },
    params: {
        pageSize: 10,
    },
        timeout: 10000
    });

    const rawCards = response.data?.data ?? [];

    const result = rawCards.map((card: any) => {
      const name = card.name;
      const imageUrl = card.images?.small ?? '';
      return new CardsPokemon(name, imageUrl);
    });

    console.log(result);
    return result
  } catch (error) {
    console.error('Erro ao buscar cartas Pokémon:', error);
  }
}

export default CardsPokeAPI;