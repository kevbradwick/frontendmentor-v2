<script>
  import Header from "$components/countries/Header.svelte";
</script>

<header>
  <Header />
</header>

<main>
  <slot />
</main>

<svelte:head>
  <title>Countries API and theme switcher</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" type="text/css" href="/countries/style.css" media="screen" />
</svelte:head>

<style>
  main {
    margin: 2rem 1.8rem;
  }
  @media screen and (min-width: 768px) {
    main {
      margin: 4rem 0;
      padding: 0 4rem;
    }
  }
</style>
