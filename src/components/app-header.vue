<script setup></script>

<template>
  <header>
    <svg class="logo" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m763.58 558.86h321l0.042968-0.035157c0.45312 0.023438 0.91016 0.035157 1.3711 0.035157 12.621 0 22.883-9.7266 23.137-21.824l1-0.88672c-35.938-248.9-250.12-440.14-508.98-440.14-257.92 0-471.5 189.86-508.59 437.45l0.44141 0.39062c-0.11328 0.89453-0.17188 1.8047-0.17188 2.7305 0 12.309 10.359 22.285 23.141 22.285 1.5977 0 3.1602-0.15625 4.6641-0.45312l0.51172 0.45312h315.26c21.848-69.547 86.824-120 163.58-120s141.73 50.453 163.58 120zm4.418 85.715h316.59l0.042968 0.039063c0.45312-0.023437 0.91016-0.039063 1.3711-0.039063 12.621 0 22.883 9.7305 23.137 21.828l1 0.88672c-35.938 248.9-250.12 440.14-508.98 440.14-257.92 0-471.5-189.86-508.59-437.45l0.44141-0.39062c-0.11328-0.89453-0.17188-1.8086-0.17188-2.7344 0-12.305 10.359-22.285 23.141-22.285 1.5977 0 3.1602 0.15625 4.6641 0.45313l0.51172-0.45313h310.84c15.883 78.25 85.062 137.14 168 137.14s152.12-58.895 168-137.14zm-168 555.43c331.37 0 600-268.63 600-600s-268.63-600-600-600-600 268.63-600 600 268.63 600 600 600zm0-504c47.34 0 85.715-38.375 85.715-85.715s-38.375-85.715-85.715-85.715-85.715 38.375-85.715 85.715 38.375 85.715 85.715 85.715z"
        fill-rule="evenodd"
      />
    </svg>
    <h2>IMD1005dex</h2>

    <nav>
      <h3 class="sr-only">Site navigation</h3>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: var(--colour-lightergray);
  color: var(--colour-darkblue);
  margin: 0.5rem 0 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
}

@media screen and (min-width: 550px) {
  header {
    flex-direction: row;
    padding: 2.5rem;
  }
}

header .logo {
  fill: var(--colour-darkblue);
  width: 2rem;
  height: auto;
  transform: rotate(-20deg);
}

header h2 {
  margin: 0 0 0 0.6rem;
  font-size: 2.2rem;
}

header nav {
  /* margin-left: auto; */
}

@media screen and (min-width: 550px) {
  header nav {
    margin-left: auto;
  }
}

header nav ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
}

header nav ul li:not(:first-child) {
  margin-left: 1rem;
}

header nav ul li a {
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffcc01; /* Pikachu Yellow */
  color: var(--colour-darkblue); /* Dark Grey */
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

header nav ul li a:hover {
  background-color: #d4af37; /* Metallic Gold */
}

header nav ul li a:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 204, 1, 0.5); /* Pikachu Yellow with 50% opacity */
}

/*

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
*/
</style>
