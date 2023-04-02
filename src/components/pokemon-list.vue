<script setup>
import pokemonListItem from '@/components/pokemon-list-item.vue';
import { usePokemons } from '@/composables/pokemons';

const { pokemons } = usePokemons();
</script>

<template>
  <ul class="pokemons">
    <pokemon-list-item v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </ul>
</template>

<style>
ul.pokemons {
  list-style-type: none;
  margin: 0px 0px 0px 0px;
  padding: 0px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media screen and (min-width: 700px) {
  ul.pokemons {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
