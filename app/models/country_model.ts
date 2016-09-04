/**
 * country model class holds model data structure
 */
export class CountryModel {
    name: string;
    topLevelDomain: string;
    alpha2Code: string;
    alpha3Code: string;
    currencies: string;
    callingCodes: string;
    capital: string;
    altSpellings: string;
    relevance: number;
    region: string;
    subregion: string;
    languages: Array<any>;
    translations: Array<any>;
    population: number;
    latlng: Array<any>;
    demonym: string;
    area: number;
    gini: string;
    timezones: string;
    borders: Array<any>;
    nativeName: string;

}