<script>
</script>

<div class="container">
  <slot />
  <input {...$$restProps} />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background-color: var(--very-light-gray-cyan);
    padding: 12px 14px 12px 18px;
    border-radius: 5px;
  }
  input {
    border: none;
    background-color: transparent;
    text-align: right;
    font-size: 24px;
    font-weight: var(--font-weight-bold);
    color: var(--very-dark-cyan);
  }

  input:focus {
    outline: none;
  }
</style>
