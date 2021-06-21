<script lang="ts">
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-awesome/components/Icon.svelte';

  import Logo from './Logo.svelte';
  import { scrollTo } from '../utils.ts';
</script>

<header>
  <Logo />

  <button class="menu-button">
    <label for="menuToggle">
      <Icon data={faBars} scale="1.3" />
    </label>
  </button>
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
    background-color: white;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  input[type='checkbox'] {
    display: none;

    &:checked ~ nav {
      display: block;
    }
  }

  nav {
    margin: auto;

    @media (max-width: bkpt.$mobile) {
      display: none;
    }
  }

  ul {
    padding: 0;
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
