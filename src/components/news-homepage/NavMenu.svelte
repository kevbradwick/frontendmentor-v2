<script>
  import IconMenu from "./IconMenu.svelte";

  let mobileNavOpen = false;
</script>

<nav class:mobile-open={mobileNavOpen}>
  <button on:click={() => (mobileNavOpen = !mobileNavOpen)}>
    <IconMenu open={mobileNavOpen} />
  </button>
  <ul>
    <li><a href="/news-homepage">Home</a></li>
    <li><a href="/news-homepage">New</a></li>
    <li><a href="/news-homepage">Popular</a></li>
    <li><a href="/news-homepage">Trending</a></li>
    <li><a href="/news-homepage">Categories</a></li>
  </ul>
</nav>

<style>
  nav {
    position: relative;
    z-index: 10;
    top: 10px;
    right: 0;
  }

  nav.mobile-open {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .mobile-open button {
    position: fixed;
    top: 28px;
    right: 20px;
    z-index: 12;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: var(--off-white);
    position: fixed;
    z-index: 11;
    top: 0;
    right: -340px;
    width: 340px;
    height: 100vh;
    margin: 0;
    padding: 120px 0 0 30px;
    list-style-type: none;
    transition: right 0.2s ease-in-out;
    font-size: 1.2rem;
  }

  .mobile-open ul {
    right: 0;
  }

  ul li a {
    text-decoration: none;
    color: var(--very-dark-blue);
    display: block;
    padding: 0.2rem 0.5rem;
    transition: all 0.2s ease-in;
  }

  ul li a:hover {
    color: var(--soft-red);
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    nav button {
      display: none;
    }
    nav {
      position: static;
    }
    ul {
      position: static;
      flex-direction: row;
      gap: 1rem;
      height: auto;
      width: auto;
      padding: 0;
    }
  }
</style>
