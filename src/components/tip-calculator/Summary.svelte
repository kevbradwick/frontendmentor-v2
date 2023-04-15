<script>
  import { tipAmount, totalAmount } from "$lib/tip-calculator/store";
</script>

<div class="container">
  <!-- tip amount -->
  <div class="row">
    <div class="col">
      <p>Tip Amount</p>
      <p class="light">/ person</p>
    </div>
    <div class="col">
      <p class="number">${$tipAmount.toFixed(2)}</p>
    </div>
  </div>

  <!-- total amount -->
  <div class="row">
    <div class="col">
      <p>Total</p>
      <p class="light">/ person</p>
    </div>
    <div class="col">
      <p class="number">${$totalAmount.toFixed(2)}</p>
    </div>
  </div>

  <div class="spacer" />

  <!-- reset button -->
  <div class="row">
    <button class="reset">Reset</button>
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
  }

  @media screen and (min-width: 768px) {
    .container {
      gap: 2rem;
    }
  }
</style>
