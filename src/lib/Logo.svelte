<script>
  export let light  = false;
  export let narrow = false;
</script>

<div class:narrow class:light class="logo-wrap">
  <img src="logo.svg" alt="BeanBean Exchange" />
  <a href="/">BeanBean Exchange</a>
</div>

<style lang="scss">
  @use "src/breakpoints" as bkpt;

  .logo-wrap {
    display: flex;
    align-items: center;
  }

  a {
    color: #ee5b5b;
    font-family: kirvy, sans-serif;
    font-weight: bold;
    justify-items: center;
    text-decoration: none;
    font-size: 2em;

    @media (max-width: bkpt.$mobile) {
      font-size: 1.5em;
    }
  }
  img {
    display: inline;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    flex-basis: 10%;
  }
  .light {
    color: white;
  }
  .narrow {
    max-width: 20vw;
  }
  .light img {
    filter: saturate(0%) brightness(1000%);
  }
</style>
