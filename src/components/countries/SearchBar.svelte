<script>
</script>

<form method="get" action="/countries" class="search-bar">
  <button>
    <i class="fa-solid fa-magnifying-glass" />
  </button>
  <input type="text" id="s" name="s" placeholder="Search for a country..." />
</form>

<style>
  form {
    display: flex;
    background: var(--white);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.3);
    height: 60px;
  }
  form input {
    padding: 1rem;
    border: none;
    background-color: transparent;
  }
  form input:focus {
    outline: none;
  }
  button {
    color: var(--dark-gray);
    background: transparent;
    border: none;
  }

  :global(.dark-mode) form {
    background-color: var(--dark-blue);
    box-shadow: 0 0 8px -4px black;
    color: var(--white);
  }

  :global(.dark-mode) i,
  :global(.dark-mode) input::placeholder {
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
    form {
      min-width: 460px;
    }
  }
</style>
