<script lang="ts">
  import Logo from './Logo.svelte';
</script>

<nav>
  <nav id="header" class="w-full bg-white z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <Logo />

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a
              class="inline-block text-gray-800 no-underline py-2 px-4"
              href="https://beanbean.substack.com">Blog</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-gray-800 no-underline py-2 px-4"
              href="mailto: fcontact@beanbean.exchange">Contact</a
            >
          </li>
          <button
            class="mx-auto lg:mx-0 hover:underline bg-'ee5b5b' text-gray-800 font-bold py-2 px-4 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onclick="window.location.href='https://beanbean.substack.com/embed';"
          >
            Join Mailing List
          </button>
        </ul>
      </div>
    </div>
  </nav>
</nav>
