<script>
  import Label from "./Label.svelte";
  import Input from "./Input.svelte";
  import TipSelect from "./TipSelect.svelte";
  import IconDollar from "./IconDollar.svelte";
  import IconPerson from "./IconPerson.svelte";
</script>

<form method="post" action="/tip-calculator">
  <div class="row">
    <Label for="bill-amount">Bill</Label>
    <Input id="bill-amount" name="bill-amount" value="0">
      <IconDollar />
    </Input>
  </div>

  <div class="row">
    <Label for="tip">Select Tip %</Label>
    <TipSelect />
  </div>

  <div class="row">
    <Label for="people">Number of People</Label>
    <Input id="people" name="people" value="0">
      <IconPerson />
    </Input>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .row {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
