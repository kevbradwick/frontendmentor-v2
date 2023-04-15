<script>
  import { goto } from "$app/navigation";

  /** @type {number|null}*/
  export let tabIndex = null;
  /** @type string */
  export let name;
  /** @type number */
  export let population;
  /** @type string */
  export let region;
  /** @type string */
  export let capital;
  /** @type Countries.Flag */
  export let flag;
  /** @type string */
  export let countryCode;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="tile"
  tabindex={tabIndex}
  role="link"
  on:click={() => goto(`/countries/${countryCode}`)}
>
  <div class="flag">
    <img src={flag.svg} alt={flag.alt} />
  </div>
  <div class="content">
    <h3>{name}</h3>
    <p><strong>Population:</strong> {population}</p>
    <p><strong>Region:</strong> {region}</p>
    <p><strong>Capital:</strong> {capital}</p>
  </div>
</div>

<style>
  .tile {
    background-color: var(--white);
    box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    cursor: pointer;
  }

  .flag {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .flag img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .content {
    padding: 1.2rem 1.8rem;
  }

  .content h3 {
    padding: 0;
    margin: 0 0 1.4rem 0;
    font-size: 1.2rem;
  }

  .content p {
    padding: 0;
    margin: 0 0 0.8rem 0;
  }

  :global(.dark-mode) .tile {
    background-color: var(--dark-blue);
    box-shadow: 0 0 8px -4px black;
    color: var(--white);
  }

  @media screen and (min-width: 576px) {
    .tile {
      max-width: 290px;
    }
    .flag {
      max-height: 200px;
    }
  }
</style>
