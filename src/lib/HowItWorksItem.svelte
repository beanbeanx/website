<script lang="ts">
  export let title;
</script>

<li class="lg:w-1/3 md:w-1/2 my-3 px-4 hiw-item sm:px-10">
  <div class="border border-gray-100 rounded-lg">
    <div
      class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
    >
      <slot name="icon" />
    </div>
    <h2 class="text-lg text-gray-800 font-medium title-font mb-2">{title}</h2>
    <p class="text-gray-600">
      <slot />
    </p>
  </div>
</li>

<style>
</style>
