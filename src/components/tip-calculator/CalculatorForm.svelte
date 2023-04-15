<script>
  import Label from "./Label.svelte";
  import Input from "./Input.svelte";
  import TipSelect from "./TipSelect.svelte";
  import IconDollar from "./IconDollar.svelte";
  import IconPerson from "./IconPerson.svelte";
  import { isNumber } from "$lib/tip-calculator";

  export let tipPercentage = 0;
  export let billAmount = 0;
  export let numberOfPeople = 0;

  let billError = "";
  let peopleError = "";

  let _billAmount = "0";
  let _numberOfPeople = "0";

  $: {
    if (!isNumber(_billAmount)) {
      billError = "Bill amount must be a number";
    } else {
      billError = "";
      billAmount = parseFloat(_billAmount);
    }
    if (!isNumber(_numberOfPeople)) {
      peopleError = "Number of people must be a number";
    } else {
      peopleError = "";
      numberOfPeople = parseFloat(_numberOfPeople);
    }
  }
</script>

<form method="post" action="/tip-calculator">
  <div class="row">
    <Label for="bill-amount" error={billError}>Bill</Label>
    <Input id="bill-amount" name="bill-amount" bind:value={_billAmount} error={!!billError}>
      <IconDollar />
    </Input>
  </div>

  <div class="row">
    <Label for="tip">Select Tip %</Label>
    <TipSelect bind:tipPercentage />
  </div>

  <div class="row">
    <Label for="people" error={peopleError}>Number of People</Label>
    <Input id="people" name="people" bind:value={_numberOfPeople} error={!!peopleError}>
      <IconPerson />
    </Input>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .row {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
</style>
