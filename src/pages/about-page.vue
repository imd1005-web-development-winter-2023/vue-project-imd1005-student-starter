<script setup>
const DATA_IMG_URL = '/images/data-transfer/data-transfer.png';
const imageAdaptedSource = import.meta.env.BASE_URL + DATA_IMG_URL;
</script>

<template>
  <div class="about">
    <div class="content">
      <h1>Welcome to the IMD1005dex</h1>

      <p>
        This project is a small Vue 3 app, demonstrating how to use the Vue router, composable
        functions, loading JSON data, and dealing with GitHub's base repo folder addition when using
        GitHub pages.
      </p>

      <h2>Components</h2>

      <p>
        The app is broken down to a number of components to separate out the different areas of
        responsibility.
      </p>

      <h3>/pages</h3>

      <p>Components in the pages folder are responsible for the different virtual page layouts.</p>

      <h3>/components</h3>

      <p>
        We put all of our user interface components in the components directory. These components
        are responsible for rendering different user interfaces for our app.
      </p>

      <h3>/composables</h3>

      <p>
        Our Vue 3 composable functions are stored in the composables folder. Composable functions
        are a special Vue 3 feature that allows us to reuse code in different components. This saves
        us from writing the same code in different components.
      </p>

      <p>
        Here is a great video on
        <a
          rel="external nofollow"
          href="https://www.vuemastery.com/courses/coding-better-composables/what-is-a-composable/"
          >Vue Composable functions</a
        >.
      </p>

      <h2>Data loading</h2>

      <img :src="imageAdaptedSource" alt="" />

      <p>
        All of our data for the Pokemon is stored in one place in a JSON file inside our "data"
        folder.
      </p>

      <p>
        We use a Vue Composable function called "usePokemons()" as a way to share this data with
        many different compoments in our application.
      </p>

      <p>
        The benefit of using a Vue Composable function this way is that we have a single source of
        truth for all of our components in our app to access pokemon data.
      </p>

      <p>
        This makes our app easier to maintain, and much faster since we only load the Pokemon data
        once from our JSON file. By comparison, if we didn't use a Vue Composable function, each of
        our components would have had to load the pokemon data file individually.
      </p>

      <h2>References</h2>

      <ul>
        <li>
          <a rel="external nofollow" href="https://github.com/Purukitto/pokemon-data.json"
            >Pokemon Data</a
          >
        </li>
        <li>
          <a rel="external nofollow" href="https://www.vuemastery.com/vue-cheat-sheet/"
            >Vue cheat sheet</a
          >
        </li>
        <li><a rel="external nofollow" href="https://vuejs.org">Vue docs</a></li>
        <li><a rel="external nofollow" href="https://vitejs.dev">Vite docs</a></li>
        <li><a rel="external nofollow" href="https://router.vuejs.org">Vue Router docs</a></li>
        <li>
          <a
            rel="external nofollow"
            href="https://www.vuemastery.com/courses/coding-better-composables/what-is-a-composable/"
            >Vue Composable functions</a
          >
        </li>
        <li>
          <a rel="external nofollow" href="https://sketchelements.com/ios-pokedex-app/"
            >UX Inspiration: iOS Pokedex App - Free Sketch Resource</a
          >
        </li>
        <li>
          <a rel="external nofollow" href="https://dribbble.com/shots/14500564-Pokedex"
            >UX Inspiration: Dribble Pokedex</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about .content {
  color: var(--colour-white);
  background-color: var(--colour-orange);
  padding: 25px;
  border-radius: 10px;
}

.about h1,
.about h2,
.about h3,
.about h4,
.about p,
.about img {
  margin-bottom: 1rem;
}

.about p {
  font-size: 1.3rem;
}

.about a {
  color: var(--colour-white);
  font-size: 1.3rem;
  transition: all 0.3s ease-in-out;
}

.about a:hover {
  color: var(--colour-darkblue);
  font-size: 1.3rem;
}

.about img {
  background-color: var(--colour-white);
  border-radius: 25px;
  padding: 10px;
}
</style>
