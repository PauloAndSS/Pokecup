//API USADA : API Pokemontcg.io V2

import { useEffect, useState } from 'react';
import axios from 'axios';
import CardsPokemon from '../Model/CardsPokemon';

const TCGAPI = (limit: number, page: number) => {
  const [cards, setCards] = useState<CardsPokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.justtcg.com/v1/cards', {
          headers: {
            'x-api-key': 'tcg_sua_chave_aqui' // 🔐 Substitua pela sua chave da JustTCG
          },
          params: {
            game: 'pokemon',
            limit: limit
          }
        });

        const rawCards = response.data?.data || [];

        const formatted = rawCards.map((card: any) => {
          const name = card.name;
          const imageUrl = card.variants?.[0]?.image ?? '';
          return new CardsPokemon(name, imageUrl);
        });

        setCards(formatted);
      } catch (error) {
        console.error('Erro ao buscar cartas:', error);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [limit]);
  console.log({ cards, loading })
  return { cards, loading };
};

export default TCGAPI;