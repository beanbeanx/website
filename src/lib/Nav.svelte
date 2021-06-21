<script lang="ts">
  import Logo from './Logo.svelte';
  import { scrollTo } from '../utils.ts';

  let menuVisible = false;

  export function toggleMenu() {
    menuVisible = !menuVisible;
  }
</script>

<nav>
  <nav id="header" class="w-full bg-white z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <Logo />

      <div class="block md:hidden pr-4">
        <button
          class="flex menu-button items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          on:click={() => toggleMenu()}
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class:hidden={!menuVisible}
        class="w-full flex-grow md:flex md:items-center md:w-auto mt-0 md:mt-0 bg-white md:bg-transparent text-black p-4 md:p-0 z-20"
      >
        <ul class="list-reset md:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block text-gray-800 no-underline py-1 px-4"
              href="https://beanbean.substack.com">Blog</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-gray-800 no-underline py-1 px-4"
              href="https://twitter.com/beanbeanxchg">Twitter</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-gray-800 no-underline py-1 px-4"
              href="mailto:contact@beanbean.exchange">Contact Us</a
            >
          </li>
          <a
            class="mx-auto md:mx-0 hover:underline bg-'ee5b5b' text-gray-800 font-bold py-1 px-4 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            on:click={scrollTo}
            href="#signup"
          >
            Join the Mailing List
          </a>
        </ul>
      </div>
    </div>
  </nav>
</nav>

<style>
  .menu-button {
    color: var(--brand-color);
  }
</style>
