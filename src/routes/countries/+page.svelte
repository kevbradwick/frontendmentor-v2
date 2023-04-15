<script>
  import { page } from "$app/stores";
  import SearchBar from "$components/countries/SearchBar.svelte";
  import FilterSelect from "$components/countries/FilterSelect.svelte";
  import Tile from "$components/countries/Tile.svelte";
  import Error from "$components/countries/Error.svelte";
  import { getAllCountries } from "$lib/countries";

  /** @type Countries.Country[] */
  let countries;
  let loadError = false;
  let filterOpen = false;

  page.subscribe(async (p) => {
    loadError = false;
    filterOpen = false;
    const search = p.url.searchParams.get("s") || "";
    const region = p.url.searchParams.get("region") || "";
    const validRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

    try {
      if (validRegions.includes(region)) {
        countries = await getAllCountries(region);
      } else if (search) {
        countries = await getAllCountries("", search);
      } else {
        countries = await getAllCountries();
      }
    } catch (e) {
      console.error("failed to load countries", e);
      loadError = true;
    }
  });
</script>

<div class="toolbar">
  <SearchBar />
  <FilterSelect bind:open={filterOpen} />
</div>

{#if loadError}
  <Error />
{/if}

{#if countries}
  <section>
    {#each countries as country}
      <Tile
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
        flag={country.flag}
        countryCode={country.countryCode}
      />
    {/each}
  </section>
{:else if !loadError}
  <section class="loading">
    <h1>Loading...</h1>
  </section>
{/if}

<style>
  .toolbar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
  }

  section {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    margin-top: 4rem;
    gap: 5rem;
  }

  section.loading {
    display: block;
    text-align: center;
  }

  @media screen and (min-width: 576px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .toolbar {
      flex-direction: row;
      gap: 0;
    }
  }

  @media screen and (min-width: 992px) {
    section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1400px) {
    section {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1800px) {
    section {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media screen and (min-width: 2100px) {
    section {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media screen and (min-width: 2700px) {
    section {
      grid-template-columns: repeat(8, 1fr);
    }
  }
</style>
