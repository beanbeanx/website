<script lang="ts">
  import PointerCards from '$lib/PointerCards.svelte';
  import { scrollTo } from '../utils.ts';
</script>

<svelte:head>
  <title>BeanBean Exchange - Blue Mountain Coffee, Verified Using Blockchain</title>
  <meta
    name="description"
    content="BeanBean Exchange makes it fun and easy to buy authentic Blue Mountain Coffee directly from farms. Built on blockchain for full verifiability and tokenized rewards."
  />
</svelte:head>

<div>
  <section id="welcome">
    <hgroup>
      <h1>Buy the world's best coffee directly from farms.</h1>
      <h2 class="welcome-subheading">
        Enjoy authentic Jamaican Blue Mountain Coffee
        delivered directly from farms with end-to-end verifiability,
        provided by blockchain.
      </h2>
    </hgroup>

    <button>Subscribe to Updates</button>
  </section>

  <section id="how-it-works">
    <h2>How it works</h2>
    <PointerCards />
  </section>
</div>

<style lang="scss">
  section {
    padding: 0.5px 0;
  }

  .welcome-message {

  }

  .welcome-subheading {
    font-weight: normal;
  }
</style>
