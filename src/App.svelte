<script lang="ts">
  import Footer from './Footer.svelte';
  import HowItWorksItem from './HowItWorksItem.svelte';
  import Nav from './Nav.svelte';
  import Tailwind from './Tailwind.svelte';
  import Wave from './Wave.svelte';
  import { scrollTo } from './utils.ts';
</script>

<div class="leading-normal tracking-normal text-white gradient">
  <Nav />

  <!-- HERO -->
  <div class="pt-0">
    <div
      class="pt-0 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center relative z-10"
    >
      <!--Left Col-->
      <div
        class="pt-24 pb-6 flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left"
      >
        <h1 class="my-4 text-5xl font-bold leading-tight">
          The world’s best coffee, <br /> verified by blockchain
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Buy premium Jamaican Blue Mountain coffee directly from farms and verify your
          order using blockchain!
        </p>
        <a
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          href="#signup"
          on:click={scrollTo}
        >
          Join the Mailing List
        </a>
      </div>
      <!--Right Col-->
      <div class="pt-0 w-full md:w-1/2 py-6 text-center">
        <img class="w-full md:w-full z-50" src="hero.svg" alt="" />
      </div>
    </div>
  </div>

  <div class="relative z-0 -mt-12 lg:-mt-24">
    <Wave position="top" />
  </div>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Learn More
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-72 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Verify farm &amp; coffee in seconds
          </h3>
          <p class="text-gray-600 mb-8">
            Backed by the <a href="https://jacra.org/" target="_blank"
              >Jamaica Agricultural Commodities Regulatory Authority</a
            > and cryptographic signatures, BeanBean allows you to verify the farm and trace
            the origin of the received coffee in seconds.
          </p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img
            src="verify_farm_coffee.svg"
            alt="world map showing where BeanBean Exchange ships"
          />
        </div>
      </div>

      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img src="ships_to.svg" alt="world map showing where BeanBean Exchange ships" />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Enjoy the best product, not the resellers
            </h3>
            <p class="text-gray-600 mb-8">
              Get smooth-tasting Blue Mountain coffee delivered directly from farms,
              cutting out distributors to receive peak freshness, and authenticity.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Governance & Rewards
          </h3>
          <p class="text-gray-600 mb-8">
            Receive NFTs, airdrops, purchase protection, profit sharing, and governance
            rights by holding coffee tokens earned from using the marketplace.
          </p>
        </div>

        <div class="w-full sm:w-1/2 p-6">
          <img src="benefits.svg" alt="world map showing where BeanBean Exchange ships" />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 border-w py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        How it works
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-80 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <ol class="flex flex-wrap justify-center">
        <HowItWorksItem title="Reserve">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#ee5b5b"
            ><path d="M0 0h24v24H0z" fill="none" /><path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            /></svg
          >
          Browse verifiable farms, choose your favorite bean grade and roast, &amp; pre-order
          your share of the crop.
        </HowItWorksItem>
        <HowItWorksItem title="Roast">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#ee5b5b"
            ><g><rect fill="none" height="24" width="24" y="0" /></g><g
              ><path
                d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z"
              /></g
            ></svg
          >
          The farm roasts, certifies, and mails the coffee directly to your door. Each bag
          bears a unique, tamper-proof seal that references the on-chain transaction and establishes
          the farm as its origin.
        </HowItWorksItem>
        <HowItWorksItem title="Receive">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#ee5b5b"
            ><path d="M0 0h24v24H0z" fill="none" /><path
              d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
            /></svg
          >
          Receive your Blue Montain coffee, verify its authenticity using a unique code, &amp;
          receive NFTs and other rewards.
        </HowItWorksItem>
      </ol>
    </div>
  </section>

  <!-- Change the colour #f8fafc to match the previous section colour -->
  <Wave position="bottom" />
  <section id="signup" class="container mx-auto text-center py-6 mb-12">
    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
      <span class="inline-block">Stay up with latest news &amp;</span>
      <span class="inline-block">Get $5 off at launch</span>
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto bg-white w-2/3 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <iframe
      title="mailing list signup via substack"
      class="m-auto"
      src="https://beanbean.substack.com/embed"
      width="360"
      height="150"
      style="border:1px solid #EEE; background:white;"
      frameborder="0"
      scrolling="no"
    />
  </section>

  <Footer />
</div>

<style>
  .gradient {
    background: linear-gradient(90deg, #ee5b5b 0%, #fbd7d7 100%);
  }
</style>
