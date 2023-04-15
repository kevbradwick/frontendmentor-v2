<script>
  export let error = false;
  export let value = "";
  const onFocus = () => {
    const input = document.getElementById($$restProps.id);
    if (input) {
      input.focus();
    }
  };
</script>

<div class="container" class:error on:click|self={onFocus} on:keydown={onFocus}>
  <slot />
  <input {...$$restProps} bind:value />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background-color: var(--very-light-gray-cyan);
    padding: 12px 14px 12px 18px;
    border-radius: 5px;
  }
  .container:focus-within {
    border: 3px solid var(--strong-cyan);
  }

  input {
    border: none;
    background-color: transparent;
    text-align: right;
    font-size: 24px;
    font-weight: var(--font-weight-bold);
    color: var(--very-dark-cyan);
  }

  .error {
    border: 3px solid var(--soft-red) !important;
  }

  input:focus {
    outline: none;
  }
</style>
