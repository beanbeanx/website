<script lang="ts">
  // import HowItWorksItem from "$lib/HowItWorksItem.svelte";
  // import Wave from "$lib/Wave.svelte";
  import PointerCard from '$lib/PointerCard.svelte';
  import { scrollTo } from '../utils.ts';
</script>

<svelte:head>
  <title>BeanBean Exchange - Blue Mountain Coffee, Verified Using Blockchain</title>
</svelte:head>

<div class="pointer-cards">
  <PointerCard
    width="80%"
    height="10em"
    color="yellow"
    direction="left"
    title="File green beans"
  >
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>

  <div class="line-wrap">
    <svg
      class="pointer-cards-line line-1-2"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 190.68256 183.44733"
      preserveAspectRatio="none"
    >
      <defs>
        <g id="line-1-2">
          <path
            vector-effect="non-scaling-stroke"
            d="M6.64349,6.63794V61.78333c0,6.12719,6.12726,12.25451,12.25452,12.25451H121.019c6.12726,0,15.18219,5.38245,18.10993,10.765l56.15466,103.24"
            transform="translate(-5.62228 -5.61673)"
            style="fill:none;stroke:#ee5b5b;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.042419910430908px"
          />
        </g>
      </defs>
      <use xlink:href="#line-1-2" /></svg
    >
  </div>
  <PointerCard
    width="50%"
    height="12em"
    color="blue"
    direction="left"
    title="File green beans"
  >
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>
  <div class="line-wrap">
    <svg
      class="pointer-cards-line line-2-3"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 192.5234 178.34088"
      preserveAspectRatio="none"
    >
      <defs>
        <g id="line-2-3">
          <path
            vector-effect="non-scaling-stroke"
            d="M6.64349,6.63794V61.78333c0,6.12719,6.12726,12.25451,12.25452,12.25451H121.019c6.12726,0,15.18219,5.38245,18.10993,10.765l56.15466,103.24"
            transform="translate(-5.62228 -5.61673)"
            style="fill:none;stroke:#ee5b5b;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.042419910430908px"
          />
        </g>
      </defs>
      <use xlink:href="#line-2-3" /></svg
    >
  </div>
  <PointerCard
    width="300px"
    height="200px"
    color="yellow"
    direction="right"
    title="File green beans"
  >
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>
  <PointerCard
    width="50%"
    height="12em"
    color="blue"
    direction="left"
    title="File green beans"
  >
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>
  <div class="line-wrap">
    <svg
      class="pointer-cards-line line-4-5"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 190.68256 183.44733"
      preserveAspectRatio="none"
    >
      <use xlink:href="#line-1-2" /></svg
    >
  </div>
  <PointerCard
    height="10em"
    width="90%"
    color="yellow"
    direction="left"
    title="File green beans"
  >
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>
</div>

<style>
  .pointer-cards {
    counter-reset: pointercard;
    width: 80vw;
    max-width: 800px;
    margin: auto;
  }

  .line-wrap {
    position: absolute;
    width: 0;
    height: 0;
  }

  .line-1-2 {
    float: left;
    position: relative;
    top: -6em;
    left: 39px;
    width: 20vw;
    max-width: 160px;
    height: 12em;
  }

  .line-2-3 {
    float: left;
    position: relative;
    top: -75px;
    left: 98px;
    width: 20vw;
    max-width: 160px;
    height: 150px;
  }

  .line-4-5 {
    float: left;
    position: relative;
    top: -90px;
    left: 62px;
    width: 20vw;
    max-width: 160px;
    height: 150px;
    transform: scaleX(-1);
  }
</style>
