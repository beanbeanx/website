<script lang="ts">
  import '../app.postcss';
  import Nav from '$lib/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Nav />

<main>
  <slot />
</main>

<!-- <Footer /> -->
<footer>
  <section id="signup">
    <h1>Stay up with the latest news &amp; Get $5 off at launch</h1>
    <iframe
      title="mailing list signup via substack"
      src="https://beanbean.substack.com/embed"
      width="360"
      height="150"
      frameborder="0"
      scrolling="no"
    />
  </section>
</footer>

<style lang="scss">
  @use "src/breakpoints" as bkpt;

  main {
    background-color: #f6f3f0;
    @media (max-width: bkpt.$mobile) {
      margin-top: 9vh;
    }
  }

  footer {
    background-color: white;
  }
</style>
