<script lang="ts">
  export let color: 'blue' | 'yellow';
  export let direction: 'left' | 'right';
  export let title: string;
  export let colspan: string;

  let colStart, colEnd, cardColStart, cardColEnd, ballCol;
  $: {
    [colStart, colEnd] = colspan.split(':').map(s => parseInt(s, 10));
    ballCol = direction === 'right' ? colEnd - 1 : colStart;
    cardColStart = direction === 'right' ? colStart : colStart + 1;
    cardColEnd = direction === 'right' ? colEnd - 1 : colEnd;
  }
</script>

<div class="pointer-card direction-{direction}" style="grid-column:{colStart} / {colEnd}">
  {#if direction === 'left'}
    <div class="ball direction-{direction}" style="grid-column:{ballCol} / {ballCol};" />
  {/if}
  <div
    class="card direction-{direction}"
    style="grid-column:{cardColStart} / {cardColEnd}"
  >
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
    <div class="ball direction-{direction}" style="grid-column:{ballCol} / {ballCol};" />
  {/if}
</div>

<style lang="scss">
  .pointer-card {
    display: contents;
  }

  .pointer-card.direction-right {
    flex-direction: row-reverse;
  }

  .card {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .ball {
    counter-increment: pointercard;
    display: inline-grid;
    align-items: center;
    justify-content: center;
    background-color: var(--brand-color);
    width: 8vw;
    height: 8vw;
    max-width: 80px;
    max-height: 80px;
    border-radius: 50%;
    color: white;
    font-size: 1.5em;
  }
  .ball::before {
    content: counter(pointercard);
  }

  .card.direction-right {
    flex-direction: row-reverse;
  }

  .card-body {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .card-body.direction-right {
    border-radius: 10px 0 0 10px;
  }
  .card-body.direction-left {
    border-radius: 0 10px 10px 0;
  }

  .card-body.color-blue {
    background-color: var(--brand-accent-blue);
  }
  .card-body.color-yellow {
    background-color: var(--brand-accent-yellow);
  }

  .card-content {
  }

  .card-pointer {
    height: 100%;
  }
  .card-pointer.direction-left {
    margin-right: -1px;
  }
  .card-pointer.direction-right {
    transform: scaleX(-1);
    margin-left: -1px;
  }

  .card-pointer.color-yellow {
    fill: var(--brand-accent-yellow);
    border-right-color: var(--brand-accent-yellow);
  }
  .card-pointer.color-blue {
    fill: var(--brand-accent-blue);
    border-right-color: var(--brand-accent-blue);
  }
</style>
