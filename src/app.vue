<script setup>
import { RouterView } from 'vue-router';
import appHeader from './components/app-header.vue';
</script>

<template>
  <app-header />

  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  margin: 0 auto 4rem auto;
  max-width: 700px;
  width: minmax(0, 100%);
  padding: 0 1rem 1rem 1rem;
}

@media screen and (min-width: 700px) {
  main {
    padding: 0 1.5rem 1rem 1.5rem;
  }
}
/*
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
