<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  pokemon: {
    type: Object,
    default: null,
  },
});

// Because GitHub Pages adds a /REPO/ folder
// we need to adjust or adapt the file path
// to account for the base repo name
const imageAdaptedSource = computed(() => {
  return import.meta.env.BASE_URL + props.pokemon.image.thumbnail;
});
</script>

<template>
  <li v-if="pokemon === null">Error occured</li>
  <li v-else class="pokemon">
    <div class="content">
      <h2>{{ pokemon.name.english }}</h2>

      <p class="sr-only">Types</p>

      <ul class="types">
        <li v-for="kind in pokemon.type" :key="kind">
          {{ kind }}
        </li>
      </ul>
      <RouterLink
        class="link"
        :to="{
          name: 'pokemon',
          params: {
            pokemonName: pokemon.name.english,
          },
        }"
        >Learn more
        <span class="sr-only">{{ pokemon.name.english }}</span>
        <svg version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m600 30c-151.17 0-296.16 60.055-403.05 166.95s-166.95 251.88-166.95 403.05 60.055 296.16 166.95 403.05 251.88 166.95 403.05 166.95c100.05 0 198.35-26.336 285-76.367 86.652-50.027 158.61-121.98 208.63-208.63 50.031-86.652 76.367-184.95 76.367-285 0-151.17-60.055-296.16-166.95-403.05s-251.88-166.95-403.05-166.95zm280.2 620.04-216 216c-17.148 17.148-42.145 23.848-65.57 17.57-23.422-6.2773-41.723-24.574-48-48-6.2734-23.426 0.42188-48.422 17.57-65.57l103.8-102.84h-304.32c-24.18 0-46.523-12.898-58.613-33.84s-12.09-46.738 0-67.68c12.09-20.941 34.434-33.84 58.613-33.84h302.88l-102.12-102.24c-17.148-17.148-23.848-42.145-17.57-65.57s24.574-41.723 48-48c23.426-6.2773 48.422 0.42188 65.57 17.57l216 216c13.285 13.32 20.383 31.602 19.559 50.398v2.1602c0.039062 17.961-7.0859 35.191-19.801 47.879z"
          />
        </svg>
      </RouterLink>
    </div>
    <img class="thumb" :src="imageAdaptedSource" alt="" />
  </li>
</template>

<style>
.pokemon {
  /* border: 5px solid var(--colour-green); */
  background-color: var(--colour-gray);
  padding: 1rem;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;

  transition: all 0.2s ease-in-out;
  border: 1px solid var(--colour-gray);
}

.pokemon:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* border: 1px solid var(--colour-green); */
}

.pokemon h2 {
  margin: 0px 0px 1rem 0px;
  color: var(--colour-darkblue);
}

.pokemon .content {
  flex-grow: 1;
}

.pokemon .thumb {
  width: 100%;
  transition: all 1s ease-in-out;
}

.pokemon:hover .thumb {
  transform: scale(1.2);
}

.pokemon .types {
  list-style-type: none;
  margin: 0px 0px 1rem 0px;
  padding: 0px;
  width: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.pokemon .types li {
  margin: 0px 0.5rem 0px 0px;
  padding: 0.4rem;
  /* background-color: var(--colour-green); */
  border: 2px solid var(--colour-green);
  border-radius: 5px;

  font-size: 0.8rem;
  font-weight: 600;
  color: var(--colour-green);
}

.pokemon .link {
  font-size: 1.2rem;
  color: var(--colour-darkblue);
  display: inline-flex;
  align-items: center;
  transition: all 0.1s ease-in-out;
}

.pokemon .link:hover {
  color: var(--colour-lighterblue);
}

.pokemon .link:hover svg {
  fill: var(--colour-lighterblue);
}

.pokemon .link svg {
  margin-left: 0.2rem;
  width: 1.1rem;
  height: auto;

  fill: var(--colour-darkblue);
}
</style>
