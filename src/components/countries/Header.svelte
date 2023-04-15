<script>
  let darkMode = false;

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    darkMode = !darkMode;
  };
</script>

<div class="header">
  <h1>Where in the world?</h1>
  <form method="post" action="">
    <button on:click|preventDefault={toggleTheme}>
      {#if darkMode}
        <i class="fa-regular fa-sun" />Light Mode
      {:else}
        <i class="fa-regular fa-moon" />Dark Mode
      {/if}
    </button>
  </form>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 1.3rem;
    background-color: var(--white);
    box-shadow: 0 0 8px -4px #858585;
  }

  .header h1 {
    font-size: 1.2rem;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
    padding: 0.2rem 0.4rem;
    font-size: 1rem;
    font-weight: var(--font-weight-normal);
  }

  button i {
    margin-right: 5px;
  }

  :global(.dark-mode) .header {
    background-color: var(--dark-blue);
    box-shadow: 0 0 8px -4px black;
  }

  :global(.dark-mode) button {
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
    .header {
      padding: 1rem 4rem;
    }

    .header h1 {
      font-size: 1.5rem;
    }
  }
</style>
