<script>
  export let error = "";
</script>

<div>
  <label {...$$restProps}><slot /></label>
  {#if error}
    <span class="error">{error}</span>
  {/if}
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
  }
  .error {
    color: var(--soft-red);
    font-weight: var(--font-weight-bold);
  }
  label {
    font-weight: var(--font-weight-bold);
  }
</style>
