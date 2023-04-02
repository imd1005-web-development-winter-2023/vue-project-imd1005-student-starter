// https://vuejs.org/guide/reusability/composables.html

import { ref } from 'vue';
import pokemonData from '@/data/pokemons.json';

export function usePokemons() {
  const pokemons = ref(pokemonData);

  return {
    pokemons,
  };
}
