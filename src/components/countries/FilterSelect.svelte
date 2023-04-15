<script>
  export let open = false;
</script>

<div class="filter-select" class:open>
  <button class="filter-choices" on:click={() => (open = !open)}>
    Filter by Region
    <i class="fa-solid fa-chevron-down" />
  </button>
  <ul>
    <li><a href="/countries?region=All">All</a></li>
    <li><a href="/countries?region=Africa">Africa</a></li>
    <li><a href="/countries?region=Americas">Americas</a></li>
    <li><a href="/countries?region=Asia">Asia</a></li>
    <li><a href="/countries?region=Europe">Europe</a></li>
    <li><a href="/countries?region=Oceania">Oceania</a></li>
  </ul>
</div>

<style>
  .filter-select {
    position: relative;
  }

  button {
    background: var(--white);
    border-radius: 5px;
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.3);
    border: none;
    padding: 0rem 2rem;
    height: 60px;
    cursor: pointer;
  }

  button i {
    margin-left: 2rem;
  }

  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 1rem 0;
    list-style-type: none;
    top: 64px;
    background: var(--white);
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.1s ease-in;
    z-index: 100;
  }

  ul li {
    margin: 0;
    padding: 0;
  }

  ul li a {
    text-decoration: none;
    display: block;
    padding: 0.6rem 2rem;
    color: var(--very-dark-blue);
    background-color: transparent;
    transition: background-color 0.2s ease-in;
  }

  ul li a:hover {
    background-color: var(--very-light-gray);
  }

  .open ul {
    opacity: 1;
  }

  :global(.dark-mode) button,
  :global(.dark-mode) ul {
    background-color: var(--dark-blue);
    box-shadow: 0 0 8px -4px black;
    color: var(--white);
  }

  :global(.dark-mode) ul li a {
    color: var(--white);
  }

  :global(.dark-mode) ul li a:hover {
    color: var(--white);
    background-color: var(--very-dark-blue);
  }
</style>
