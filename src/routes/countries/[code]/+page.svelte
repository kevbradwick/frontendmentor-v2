<script>
  import { page } from "$app/stores";
  import Link from "$components/countries/Link.svelte";
  import Error from "$components/countries/Error.svelte";
  import { getCountry } from "$lib/countries";

  /** @type Countries.Country|undefined */
  let country;
  let error = false;

  page.subscribe(async (p) => {
    error = false;
    const countryCode = p.params.code;
    if (countryCode) {
      try {
        country = await getCountry(countryCode);
      } catch (e) {
        error = true;
        console.error(`failed to load country with code: ${countryCode}`, e);
      }
    }
  });
</script>

<div class="container">
  <nav>
    <Link href="/countries">
      <i class="fa-solid fa-arrow-left-long" /> Back
    </Link>
  </nav>

  {#if country}
    <article>
      <div class="flag">
        <img src={country.flag.svg} alt={country.flag.alt} />
      </div>
      <div class="content">
        <h1>{country.name}</h1>
        <div class="country-info">
          <div>
            <p><strong>Native Name:</strong> {country.nativeName}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Sub Region:</strong> {country.subRegion}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </div>
          <div>
            <p><strong>Top Level Domain:</strong> {country.topLevelDomain.join(", ")}</p>
            <p><strong>Currencies:</strong> {country.currencies.join(", ")}</p>
            <p><strong>Languages:</strong> {country.languages.join(", ")}</p>
          </div>
        </div>
        {#if country.borders && country.borders.length}
          <div class="border-countries-container">
            <h2>Border Countries:</h2>
            <ul class="items">
              {#each country.borders as borderingCountry}
                <li>
                  <Link href={`/countries/${borderingCountry.countryCode}`}
                    >{borderingCountry.name}</Link
                  >
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </article>
  {:else if error}
    <Error />
  {:else}
    <h1>Loading...</h1>
  {/if}
</div>

<style>
  nav {
    margin-bottom: 4rem;
  }

  article {
    display: grid;
    gap: 4rem;
    grid-template-columns: 1fr;
  }

  .flag img {
    width: 100%;
    object-fit: cover;
  }

  .content {
    font-size: var(--font-size-detail-page);
  }

  .content h1 {
    margin: 0 0 2rem 0;
    padding: 0;
    font-size: 2.2rem;
  }

  .country-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin: 0 0 2rem 0;
  }

  .country-info p {
    margin: 0 0 1.3rem 0;
  }

  .country-info strong {
    font-weight: var(--font-weight-bold);
  }

  .border-countries-container {
    display: flex;
    flex-direction: column;
  }

  .border-countries-container h2 {
    margin: 0 0 1.2rem 0;
    padding: 0;
    font-size: 1.2rem;
    font-weight: var(--font-weight-normal);
  }

  .border-countries-container ul {
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  @media screen and (min-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      max-width: 1600px;
      margin: 0 auto;
    }

    article {
      grid-template-columns: 1fr 1fr;
    }

    .country-info {
      display: flex;
      justify-content: space-between;
    }

    .border-countries-container {
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .border-countries-container ul {
      flex-wrap: wrap;
    }
  }
</style>
