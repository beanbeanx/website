<script lang="ts">
  import Logo from './Logo.svelte';
</script>

<footer class="bg-white">
  <div class="container mx-auto px-8">
    <div class="w-full flex flex-col md:flex-row py-6">
      <Logo/>

      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Social</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Social</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="uppercase text-gray-500 md:mb-6">Company</p>
        <ul class="list-reset mb-6">
          <li class="mt-2 inline-block mr-2 md:block md:mr-0">
            <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</footer>