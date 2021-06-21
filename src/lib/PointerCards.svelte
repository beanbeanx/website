<script lang="ts">
  // import HowItWorksItem from "$lib/HowItWorksItem.svelte";
  // import Wave from "$lib/Wave.svelte";
  import PointerCard from '$lib/PointerCard.svelte';
  import { scrollTo } from '../utils.ts';
</script>

<div class="pointer-cards">
  <PointerCard color="yellow" direction="left" colspan="1:-2" title="File green beans">
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>

  <svg
    class="pointer-cards-line line-1-2"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 190.68256 183.44733"
    preserveAspectRatio="none"
  >
    <defs>
      <path
        id="line-1-2"
        vector-effect="non-scaling-stroke"
        d="M6.64349,6.63794V61.78333c0,6.12719,6.12726,12.25451,12.25452,12.25451H121.019c6.12726,0,15.18219,5.38245,18.10993,10.765l56.15466,103.24"
        transform="translate(-5.62228 -5.61673)"
        style="fill:none;stroke:#ee5b5b;stroke-width:2px"
      />
    </defs>
    <use xlink:href="#line-1-2" /></svg
  >

  <PointerCard color="blue" direction="left" title="File green beans" colspan="2:-1">
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>

  <svg
    class="pointer-cards-line line-2-3"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 192.5234 178.34088"
    preserveAspectRatio="none"
  >
    <defs>
      <path
        id="line-2-3"
        vector-effect="non-scaling-stroke"
        d="M197.61209,183.199,133.155,91.11743c-3.51373-5.01953-13.15472-10.03918-19.282-10.03918H19.38556c-6.12726,0-12.25446-6.12732-12.25446-12.25452V6.90051"
        transform="translate(-6.1099 -5.8793)"
        style="fill:none;stroke:#ee5b5b;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"
      />
    </defs>
    <use xlink:href="#line-2-3" /></svg
  >

  <PointerCard color="yellow" direction="right" title="File green beans" colspan="1:-3">
    The farm roasts the green bean and uploads JACRA quality certificate onto blockchain.
  </PointerCard>

  <svg
    class="pointer-cards-line line-3-4"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 190.68256 183.44733"
    preserveAspectRatio="none"
  >
    <use xlink:href="#line-2-3" /></svg
  >

  <PointerCard color="blue" direction="left" title="File green beans" colspan="2:-1">
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>

  <svg
    class="pointer-cards-line line-4-5"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 190.68256 183.44733"
    preserveAspectRatio="none"
  >
    <use xlink:href="#line-1-2" /></svg
  >

  <PointerCard color="yellow" direction="left" colspan="1:-2" title="File green beans">
    A verified farm mints coffee tokens by uploading the specifications of available green
    beans and intended roasting level.
  </PointerCard>
</div>

<style lang="scss">
  @use "sass:math";

  @use "src/breakpoints" as bkpt;

  $respBkpt: 800px;
  $respGridWidth: 80vw;
  $respNumCols: 7;
  $cardHeight: 150px;

  .pointer-cards {
    counter-reset: pointercard;

    width: $respGridWidth;
    max-width: 700px;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: $cardHeight 0 $cardHeight 0 $cardHeight 0 $cardHeight 0 $cardHeight;
    grid-row-gap: 20px;
    align-items: center;
    justify-items: center;

    @media (min-width: bkpt.$mobile) and (max-width: $respBkpt) {
      grid-template-columns: repeat($respNumCols, math.div($respGridWidth, $respNumCols));
    }

    @media (max-width: bkpt.$mobile) {
      width: 90vw;
      justify-items: unset;
      grid-template-columns: repeat(9, calc(90vw / 9));
      grid-template-rows: repeat(5, $cardHeight);
    }
  }

  .pointer-cards-line {
    @media (max-width: bkpt.$mobile) {
      display: none;
    }
  }

  .line-1-2 {
    grid-column: 1 / -1;
    justify-self: start;
    position: relative;
    left: 70px;
    width: 140px;
    height: $cardHeight;

    @media (min-width: bkpt.$mobile) and (max-width: $respBkpt) {
      left: calc(6vw - 2px);
      width: 12vw;
    }
  }

  .line-2-3 {
    grid-column: 2 / -1;
    justify-self: start;
    position: relative;
    left: calc(min(50px + 2vw, 70px));
    height: $cardHeight;
    width: calc(120px + 2vw);

    @media (min-width: bkpt.$mobile) and (max-width: $respBkpt) {
      left: calc(5vw);
      width: 35vw;
    }
  }

  .line-3-4 {
    grid-column: 2 / -1;
    justify-self: start;
    position: relative;
    left: calc(min(50px + 2vw, 70px));
    height: 160px;
    width: calc(120px + 2vw);
    transform: scaleY(-1);

    @media (min-width: bkpt.$mobile) and (max-width: $respBkpt) {
      width: 35vw;
      left: calc(5.5vw);
      top: -5px;
    }
  }

  .line-4-5 {
    grid-column: 1 / -1;
    justify-self: start;
    position: relative;
    left: 70px;
    height: $cardHeight;
    transform: scaleY(-1);
    width: calc(110px + 2vw);

    @media (min-width: bkpt.$mobile) and (max-width: $respBkpt) {
      left: calc(6vw - 2px);
      width: 11.5vw;
    }
  }
</style>
