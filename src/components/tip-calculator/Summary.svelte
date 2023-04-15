<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let tipAmountPerPerson = 0;
  export let totalPerPerson = 0;
</script>

<div class="container">
  <!-- tip amount -->
  <div class="row">
    <div class="col">
      <p>Tip Amount</p>
      <p class="light">/ person</p>
    </div>
    <div class="col">
      <p class="number">{tipAmountPerPerson}</p>
    </div>
  </div>

  <!-- total amount -->
  <div class="row">
    <div class="col">
      <p>Total</p>
      <p class="light">/ person</p>
    </div>
    <div class="col">
      <p class="number">{totalPerPerson}</p>
    </div>
  </div>

  <div class="spacer" />

  <!-- reset button -->
  <div class="row">
    <button class="reset" on:click|preventDefault|self={() => dispatch("reset")}>Reset</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--very-dark-cyan);
    border-radius: 1rem;
    padding: 1.8rem;
    font-weight: var(--font-weight-bold);
  }

  p {
    color: var(--very-light-gray-cyan);
    margin: 0 0 0.3rem 0;
    padding: 0;
  }

  .spacer {
    flex: 1;
  }

  .light {
    color: var(--gray-cyan);
  }

  .number {
    color: var(--strong-cyan);
    font-size: 3rem;
    font-weight: var(--font-weight-bold);
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
    border: none;
    border-radius: 0.3rem;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: var(--font-weight-bold);
    font-size: 1.2rem;
    display: block;
    width: 100%;
    padding: 1rem;
    transition: background-color 0.2s ease-in;
  }

  button:hover {
    background-color: var(--light-gray-cyan);
  }

  @media screen and (min-width: 768px) {
    .container {
      gap: 2rem;
    }
  }
</style>
