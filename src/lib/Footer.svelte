<script lang="ts">
  import Logo from "./Logo.svelte";
</script>

<footer class="bg-white">
  <div class="container mx-auto px-8">
    <div class="w-full flex py-6 justify-between">
      <Logo />

      <div class="flex-row  w-auto mt-0 bg-white text-black p-4">
        <ul class="list-reset flex">
          <li class="mr-3">
            <a
              class="inline-block text-gray-500 no-underline py-2 px-4"
              href="https://beanbean.substack.com">Blog</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-gray-500 no-underline py-2 px-4"
              href="https://twitter.com/beanbeanxchg">Twitter</a
            >
          </li>
          <li class="mr-3">
            <a
              class="inline-block text-gray-500 no-underline py-2 px-4"
              href="mailto:contact@beanbean.exchange">Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
