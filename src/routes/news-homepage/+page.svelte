<script>
  import Logo from "$components/news-homepage/Logo.svelte";
  import NavMenu from "$components/news-homepage/NavMenu.svelte";
</script>

<div class="container">
  <header>
    <Logo />
    <NavMenu />
  </header>

  <main />
</div>

<style>
  .container {
    margin-top: 2.5rem;
    padding: 0 1.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    .container {
      margin: 4rem auto;
      max-width: 1200px;
    }
  }
</style>
