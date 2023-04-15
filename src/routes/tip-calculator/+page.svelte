<script>
  import Panel from "$components/tip-calculator/Panel.svelte";
  import Logo from "$components/tip-calculator/Logo.svelte";
  import CalculatorForm from "$components/tip-calculator/CalculatorForm.svelte";
  import Summary from "$components/tip-calculator/Summary.svelte";
  import { calculateTip } from "$lib/tip-calculator";

  let billAmount = 0;
  let numberOfPeople = 0;
  let tipPercentage = 0;
  let tipAmountPerPerson = 0;
  let totalPerPerson = 0;

  const reset = () => {
    billAmount = 0;
    numberOfPeople = 0;
    tipPercentage = 0;
    tipAmountPerPerson = 0;
    totalPerPerson = 0;
  };

  $: {
    if (billAmount > 0 && numberOfPeople > 0) {
      const values = calculateTip(billAmount, tipPercentage, numberOfPeople);
      tipAmountPerPerson = values.tipAmountPerPerson;
      totalPerPerson = values.totalPerPerson;
    }
  }
</script>

<main>
  <div class="container">
    <div class="logo">
      <Logo />
    </div>
    <Panel>
      <CalculatorForm bind:billAmount bind:tipPercentage bind:numberOfPeople />
      <Summary bind:tipAmountPerPerson bind:totalPerPerson on:reset={reset} />
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
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      width: 920px;
      height: auto;
      grid-template: auto 1fr / 1fr;
    }

    .container > :global(div:last-child) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .logo {
      margin-top: 0;
    }
  }
</style>
