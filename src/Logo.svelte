<script>
  let light = false;
  let narrow = false;

  export { light, narrow };
</script>

<div class:narrow class:light class="items-center justify-center flex">
  <img src="logo.svg" alt="BeanBean Exchange Logo" />
  <a
    class="font-logo font-bold no-underline hover:no-underline text-2xl lg:text-3xl"
    href="/"
  >
    BeanBean Exchange
  </a>
</div>

<style>
  div {
    color: #ee5b5b;
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
  .font-logo {
    font-family: kirvy, sans-serif;
  }
</style>
