/**
 * @param {Countries.CountryResponse} country
 *
 * @returns {Countries.Country}
 */
const mapCountryResponse = (country) => {
  const name = country.name.common;
  const topLevelDomain = country.tld;
  const countryCode = country.cca3;
  const region = country.region;
  const subRegion = country.subregion;
  const languages = Object.values(country.languages);
  const population = country.population;
  const currencies = Object.values(country.currencies).map((c) => c.name);
  const flag = country.flags;

  let nativeName = "";
  let capital = "n/a";
  let googleMap = country.maps.googleMaps;

  // sometimes the country doesn't have a native name, so revert to common name
  if (country.name.nativeName) {
    const key = Object.keys(country.name.nativeName)[0];
    if (country.name.nativeName.hasOwnProperty(key)) {
      nativeName = country.name.nativeName[key].official;
    } else {
      nativeName = name;
    }
  }

  if (country.capital.length) {
    capital = country.capital[0];
  }

  return {
    name,
    nativeName,
    topLevelDomain,
    countryCode,
    capital,
    region,
    subRegion,
    languages,
    googleMap,
    population,
    currencies,
    flag
  };
};

/**
 * Returns a list of countries
 *
 * @param {string} [region] filter by a specific region
 * @param {string} [search] search by name
 * @param {string} [countryCode]
 *
 * @returns {Promise<Countries.Country[]>}
 */
export async function getAllCountries(region, search, countryCode) {
  const fields = [
    "name",
    "cca3",
    "capital",
    "region",
    "population",
    "subregion",
    "tld",
    "currencies",
    "languages",
    "maps",
    "flags"
  ];
  let url = "https://restcountries.com/v3.1/all";
  if (region) {
    url = "https://restcountries.com/v3.1/region/" + region;
  } else if (countryCode) {
    url = "https://restcountries.com/v3.1/alpha/" + countryCode;
  } else if (search) {
    url = "https://restcountries.com/v3.1/name/" + search;
  }

  url += `?fields=` + fields.join(",");
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      /** @type Countries.CountryResponse[] */
      const data = await response.json();
      if (Array.isArray(data)) {
        return data.map(mapCountryResponse);
      } else {
        return [mapCountryResponse(data)];
      }
    } else {
      throw new Error("error returned from countries api");
    }
  } catch (e) {
    console.error("failed to fetch countries", e);
    throw e;
  }
}

/**
 *
 * @param {string} code
 * @returns {Promise<Countries.Country>}
 */
export async function getCountry(code) {
  const results = await getAllCountries("", "", code);
  if (results && results.length === 1) {
    return results[0];
  }

  throw new Error("failed to get results for single country");
}
