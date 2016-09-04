import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {CountryModel} from '../../models/country_model'

/*
  Generated class for the CountryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CountryService {
  
  countrieslist:any;
  endpoint_url:String="https://restcountries.eu/rest/v1/region/";
endpoint_url_all:string="https://restcountries.eu/rest/v1/all";

  constructor(private http: Http) {
    this.http=http;
  }
  getCountriesByRegion(region:string){
    return this.http.get(this.endpoint_url+region)
    .map(res=>res.json());
  }
  getAllCountries(){
   
   return this.http.get('https://restcountries.eu/rest/v1/all')
    .map(res=>res.json());
   
   
    
  }
  getSpecificCountry(name: string){
    return this.http.get('https://restcountries.eu/rest/v1/name/'+name)
    .map(res=>res.json());
  }

}

