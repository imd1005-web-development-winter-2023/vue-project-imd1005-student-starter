<script setup>
import { watch, ref, computed } from 'vue';
import { usePokemons } from '@/composables/pokemons';
import { useRoute } from 'vue-router';

const route = useRoute();
const { pokemons } = usePokemons();
const pokemon = ref();

// fetch the pokemon information when the
// pokemonName params changes
watch(
  () => route.params.pokemonName,
  (incomingPokemonName) => {
    pokemon.value = pokemons.value.find(
      (element) => element.name.english.toLowerCase() === incomingPokemonName.toLowerCase(),
    );
  },
  { immediate: true },
);

// Because GitHub Pages adds a /REPO/ folder
// we need to adjust or adapt the file path
// to account for the base repo name
const imageAdaptedSource = computed(() => {
  if (pokemon.value !== undefined) {
    return import.meta.env.BASE_URL + pokemon.value.image.hires;
  }
  return null;
});
</script>

<template>
  <!--
    Use v-if to only render the pokemon details when
    a pokemon with the matching name is found
  -->
  <div v-if="pokemon">
    <div class="pd">
      <div class="image">
        <img :src="imageAdaptedSource" :alt="pokemon.name.english" />
      </div>
      <div class="content">
        <h1>
          {{ pokemon.name.english }}
        </h1>

        <div class="desc">
          <p>{{ pokemon.description }}</p>
        </div>

        <div class="stats">
          <div>
            <p>Height</p>
            <p>{{ pokemon.profile.height }}</p>
          </div>
          <div>
            <p>Weight</p>
            <p>{{ pokemon.profile.weight }}</p>
          </div>
          <div>
            <p>HP</p>
            <p>{{ pokemon.base.HP }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--
    This template code is displayed
    when no pokemon with a matching name is found
    So if a user puts /not-a-pokemon-name in the
    address bar it will show this code
  -->
  <div v-else>
    <div class="pd">
      <div class="content">
        <h1>Pokemon not found!</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .pd {
} */

.pd .image {
  width: 100%;
  height: auto;
}
.pd .image img {
  margin: 0 auto;
  width: 65%;
}
.pd .content {
  color: var(--colour-white);
  background-color: var(--colour-darkblue);
  padding: 25px;
  border-radius: 10px;
}

.pd .content h1 {
  margin-bottom: 1.4rem;
}

.pd .content .desc {
  font-size: 1.4rem;
}

.pd .content .stats {
  margin-top: 1.5rem;
  text-align: center;
  display: flex;
}

.pd .content .stats * {
  font-size: 1.5rem;

  flex-grow: 1;
}

.pd .content .stats * *:first-child {
  font-weight: 600;
}

.pd .content .stats * *:nth-child(2) {
  color: var(--colour-brightorange);
}
</style>
