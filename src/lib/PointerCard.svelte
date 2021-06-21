<script lang="ts">
  export let color: 'blue' | 'yellow';
  export let direction: 'left' | 'right';
  export let title: string;
  export let colspan: string;

  const NUM_COLS = 6;

  let colStart, colEnd, cardColStart, cardColEnd, ballCol;
  $: {
    [colStart, colEnd] = colspan.split(':').map(s => parseInt(s, 10));
    ballCol = direction === 'right' ? colEnd - 1 : colStart;
    cardColStart = direction === 'right' ? colStart : colStart + 1;
    cardColEnd = direction === 'right' ? colEnd - 1 : colEnd;
  }
</script>

<div class="pointer-card direction-{direction}">
  {#if direction === 'left'}
    <div class="ball direction-{direction} col-{ballCol}" />
  {/if}
  <div class="card direction-{direction} col-{cardColStart}-{cardColEnd}">
    <svg
      class="card-pointer direction-{direction} color-{color}"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35.81839 100"
      preserveAspectRatio="none"
    >
      <path
        shape-rendering="crispEdges"
        d="M35.09843,0a7.35207,7.35207,0,0,0-6.15974,3.32L14.85932,24.9998,1.13994,46.11993a7.17336,7.17336,0,0,0,0,7.76014L14.85932,74.9998,28.93869,96.68A7.30043,7.30043,0,0,0,35.09843,100h.72V0Z"
      />
    </svg>
    <div class="card-body color-{color} direction-{direction}">
      <h3 class="card-title">{title}</h3>
      <p class="card-content">
        <slot />
      </p>
    </div>
  </div>
  {#if direction === 'right'}
    <div class="ball direction-{direction} col-{ballCol}" />
  {/if}
</div>

<style lang="scss">
  @use "src/breakpoints" as bkpt;

  .pointer-card {
    display: contents;

    &.direction-right {
      flex-direction: row-reverse;
    }
  }

  .card {
    display: flex;
    align-items: center;
    height: 100%;

    &.direction-right {
      flex-direction: row-reverse;
    }

    &.col-2--2 {
      grid-column: 2 / -2;
    }
    &.col-3--1 {
      grid-column: 3 / -1;
    }
    &.col-1--4 {
      grid-column: 1 / -4;
    }
    @media (max-width: bkpt.$mobile) {
      &.col-2--2 {
        grid-column: 2 / -1;
      }
      &.col-3--1 {
        grid-column: 2 / -1;
      }
      &.col-1--4 {
        grid-column: 1 / -2;
      }
    }
  }

  .ball {
    counter-increment: pointercard;
    display: inline-grid;
    align-items: center;
    justify-content: center;
    background-color: var(--brand-color);
    width: 9vw;
    height: 9vw;
    max-width: 80px;
    max-height: 80px;
    border-radius: 50%;
    color: white;
    font-size: 1.5em;

    &::before {
      content: counter(pointercard);
    }

    &.col-1 {
      grid-column: 1 / 1;
    }
    &.col-2 {
      grid-column: 2 / 2;
    }
    &.col--4 {
      grid-column: -4 / -4;
    }
    @media (max-width: bkpt.$mobile) {
      &.col-1 {
        grid-column: 1 / 1;
      }
      &.col-2 {
        grid-column: 1 / 1;
      }
      &.col--4 {
        grid-column: -2;
        justify-self: end;
      }
    }
  }

  .card-body {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;

    &.direction-right {
      border-radius: 10px 0 0 10px;
    }
    &.direction-left {
      border-radius: 0 10px 10px 0;
    }

    &.color-blue {
      background-color: var(--brand-accent-blue);
    }
    &.color-yellow {
      background-color: var(--brand-accent-yellow);
    }
  }

  .card-pointer {
    height: 100%;

    &.direction-left {
      margin-right: -1px;
    }
    &.direction-right {
      transform: scaleX(-1);
      margin-left: -1px;
    }

    &.color-yellow {
      fill: var(--brand-accent-yellow);
    }
    &.color-blue {
      fill: var(--brand-accent-blue);
    }
  }
</style>
