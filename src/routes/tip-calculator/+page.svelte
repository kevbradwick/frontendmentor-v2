<script>
  import Panel from "$components/tip-calculator/Panel.svelte";
  import Logo from "$components/tip-calculator/Logo.svelte";
  import CalculatorForm from "$components/tip-calculator/CalculatorForm.svelte";
</script>

<main>
  <div class="container">
    <Logo />
    <Panel>
      <CalculatorForm />
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
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    main {
      align-items: center;
      justify-content: center;
    }

    .container {
      width: 700px;
    }
  }
</style>
