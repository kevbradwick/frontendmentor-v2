<script>
  export let message = "Oops, there was a problem loading this page.";
</script>

<section class="error">
  <h1>{message}</h1>
</section>

<style>
  .error {
    display: block;
    text-align: center;
    background-color: var(--error-bg);
    border: 1px solid var(--error-bg);
    color: var(--error-color);
    border-radius: 0.3rem;
  }
</style>
