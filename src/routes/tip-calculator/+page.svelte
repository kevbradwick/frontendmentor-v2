<script>
  import Panel from "$components/tip-calculator/Panel.svelte";
  import Logo from "$components/tip-calculator/Logo.svelte";
  import CalculatorForm from "$components/tip-calculator/CalculatorForm.svelte";
  import Summary from "$components/tip-calculator/Summary.svelte";
</script>

<main>
  <div class="container">
    <div class="logo">
      <Logo />
    </div>
    <Panel>
      <CalculatorForm />
      <Summary />
    </Panel>
  </div>
</main>

<svelte:head>
  <title>Tip Calculator</title>
  <link rel="icon" type="image/png" href="/tip-calculator/images/favicon-32x32.png" />
  <link rel="stylesheet" type="text/css" href="/tip-calculator/style.css" media="screen" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style type="text/css">
  main {
    height: 100vh;
  }

  .container {
    display: grid;
    grid-template: 200px 1fr / 1fr;
    height: 100%;
  }

  .container > :global(div:last-child) {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 3rem;
  }

  .container > :global(div:last-child) > :global(.container) {
    flex: 1;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 3.5rem auto;
  }

  @media screen and (min-width: 768px) {
    main {
      align-items: center;
      justify-content: center;
    }
  }
</style>
