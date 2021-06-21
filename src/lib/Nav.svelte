<script lang="ts">
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-awesome/components/Icon.svelte';

  import Logo from './Logo.svelte';
  import { scrollTo } from '../utils.ts';

  let y = 0;
  let lastY = 0;
  let hideHeader = false;
  $: {
    const dy = y - lastY;
    lastY = y;
    if (y <= 60) {
      hideHeader = false;
    } else {
      hideHeader = dy > 0 || (dy < 0 && dy > -4 && hideHeader)
    }
  }
</script>

<svelte:window bind:scrollY={y} />

<header class:hidden="{hideHeader}">
  <div class="header-static">
    <Logo />

    <button class="menu-button">
      <label for="menuToggle">
        <Icon data={faBars} scale="1.4" />
      </label>
    </button>
  </div>

  <input type="checkbox" id="menuToggle" />
  <nav>
    <ul>
      <li><a href="https://beanbean.substack.com" target="_blank">Blog</a></li>
      <li>Farms</li>
      <li><a href="#subscribe" on:click={scrollTo}>Subscribe</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  @use "src/breakpoints" as bkpt;

  header {
    width: 100%;
    background-color: white;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    transform: translateY(0%);

    @media (max-width: bkpt.$mobile) {
      font-size: 1.3rem;
      top: 0;
      position: fixed;
      z-index: 1000;
      box-shadow: 0 0 5px 0px #666;
      padding: 0;
      &.hidden {
        transform: translateY(calc(-100% - 10px));
      }
    }
    transition: transform 100ms linear;
  }

  .header-static {
    height: 9vh;
    align-items: center;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;

    @media (max-width: bkpt.$mobile) {
      width: 100%;
    }
  }

  input[type='checkbox'] {
    display: none;

    &:checked ~ nav {
      display: block;
    }
  }

  nav {
    font-size: 1.2rem;
    width: 20%;

    @media (max-width: bkpt.$mobile) {
      font-size: 1rem;
      width: 100%;
      display: none;
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    padding: 8px 0;;
    margin: auto;
  }

  li {
    display: inline-flex;
    margin: 0 10px;
    cursor: pointer;
  }

  .menu-button {
    color: var(--brand-color);
    background-color: transparent;
    border: unset;
    cursor: pointer;
    display: none;
    padding: 0;

    &:active {
      color: darken(#ee5b5b, 20%);
    }

    @media (max-width: bkpt.$mobile) {
      display: block;
    }
  }

  input[type='checkbox'] {
    display: none;
  }
</style>
