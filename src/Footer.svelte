<script lang="ts">
  import Logo from './Logo.svelte';
</script>

<footer class="bg-white">
  <div class="container mx-auto px-8">
    <div class="w-full flex flex-col md:flex-row py-6">
      <Logo/>

        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
  
            <li class="mr-3">
              <a class="inline-block text-gray-500 no-underline py-2 px-4" href="https://beanbean.substack.com">Blog</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-gray-500 no-underline py-2 px-4" href="mailto: fcontact@beanbean.exchange">Contact</a>
            </li>
          </ul>
        </div>

    </div>
  </div>
</footer>