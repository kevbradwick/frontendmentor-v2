namespace Countries {
  export type Flag = {
    png: string;
    svg: string;
    alt: string;
  };

  export type CountryBorder = {
    countryCode: string;
    name: string;
  };

  export type Country = {
    name: string;
    nativeName: string;
    topLevelDomain: string[];
    countryCode: string;
    capital: string;
    region: string;
    subRegion: string;
    languages: string[];
    googleMap?: string;
    population: number;
    currencies: string[];
    flag: Flag;
    borders?: CountryBorder[];
  };

  export type CountryCodeMap = {
    [key: string]: string;
  };

  export type CountryResponse = {
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    tld: string[];
    cca3: string;
    capital: string[];
    region: string;
    subregion: string;
    languages: {
      [key: string]: string;
    };
    maps: {
      googleMaps: string;
      openStreetMap: string;
    };
    currencies: {
      [string]: {
        name: string;
        symbol: string;
      };
    };
    population: number;
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    borders?: string[];
  };
}
