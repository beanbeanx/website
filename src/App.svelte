<script lang="ts">
  import Footer from './Footer.svelte';
  import Nav from './Nav.svelte';
  import Tailwind from './Tailwind.svelte';
</script>

<div class="leading-normal tracking-normal text-white gradient">
  <Nav />

  <!-- HERO -->
  <div class="pt-0">
    <div
      class="pt-0 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="pt-24 pb-6 flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left"
      >
        <h1 class="my-4 text-5xl font-bold leading-tight">
          World’s Best Coffee, <br /> selling only on blockchain
        </h1>
        <p class="leading-normal text-2xl mb-8">
          Start buying world’s most sought-after Jamaica Blue Mountain Coffee directly
          from farm owners. <br />Order and verify your coffee on blockchain!
        </p>
        <button
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          onclick="window.location.href='https://beanbean.substack.com/embed';"
        >
          Join Mailing List
        </button>
      </div>
      <!--Right Col-->
      <div class="pt-0 w-full md:w-1/2 py-6 text-center">
        <img class="w-full md:w-full z-50" src="hero.svg" />
      </div>
    </div>
  </div>

  <div class="relative -mt-12 lg:-mt-24">
    <svg
      viewBox="0 0 1428 174"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
            opacity="0.100000001"
          />
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          />
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            id="Path-4"
            opacity="0.200000003"
          />
        </g>
        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
          <path
            d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
          />
        </g>
      </g>
    </svg>
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
            Verify farm & coffee in seconds
          </h3>
          <p class="text-gray-600 mb-8">
            Backed with Jamaica Agricultural Commodities Regulatory Authority and public
            cryptography tools, BeanBean allows you to verify the selling farm and trace
            the received coffee in seconds.
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
              Enjoy best product, not best middleman
            </h3>
            <p class="text-gray-600 mb-8">
              Get the smooth, bitter-less Blue Mountain directly from farms. Cutting out
              middlemen to receive peak freshness & no resale cost.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Governance & get benefit
          </h3>
          <p class="text-gray-600 mb-8">
            Receive badges, full-refund, disbursement of excess operation fees and
            governance benefits for holding coffee tokens.
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

      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-100 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#ee5b5b"
                ><path d="M0 0h24v24H0z" fill="none" /><path
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                /></svg
              >
            </div>
            <h2 class="text-lg text-gray-800 font-medium title-font mb-2">Reserve</h2>
            <p class="text-gray-600 mb-8">
              Review green bean specifications & purchase coffee tokens from a verifiable
              farm
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-100 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
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
            </div>
            <h2 class="text-lg text-gray-800 font-medium title-font mb-2">Roast</h2>
            <p class="text-gray-600 mb-8">
              The farm roast, certify and mail out the batch of coffee you participated
              in.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-100 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#ee5b5b"
                ><path d="M0 0h24v24H0z" fill="none" /><path
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                /></svg
              >
            </div>
            <h2 class="text-lg text-gray-800 font-medium title-font mb-2">Receive</h2>
            <p class="text-gray-600 mb-8">
              Receive your verifiable Blue Montain coffee & more benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Change the colour #f8fafc to match the previous section colour -->
  <svg
    class="wave-top"
    viewBox="0 0 1439 147"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
        <g class="wave" fill="#f3f4f6">
          <path
            d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
          />
        </g>
        <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
          <g
            transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            />
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            />
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              opacity="0.200000003"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
  <section class="container mx-auto text-center py-6 mb-12">
    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
      Stay up with latest news & Get $5 off
    </h1>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto bg-white w-2/3 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <button
      class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      onclick="window.location.href='https://beanbean.substack.com/embed';"
    >
      Join Mailing List
    </button>
  </section>

  <!--Footer-->
  <Footer />
</div>

<style>
  .gradient {
    background: linear-gradient(90deg, #ee5b5b 0%, #fbd7d7 100%);
  }
</style>
