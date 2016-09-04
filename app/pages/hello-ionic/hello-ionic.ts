import {Component} from '@angular/core';
import {CountryService} from '../../providers/country-service/country-service';


@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
  providers:[CountryService]

})
export class HelloIonicPage {
  countries=[];
  error:string;
  region;
  //countries:Any[];
  constructor(private _countryService: CountryService) {
    this._countryService=_countryService;
    

  }
  getCountriesByRegion(){
    this.error="";
    this.countries=[];
    this._countryService.getCountriesByRegion(this.region)
    .subscribe(
      data=>this.countries=data,
      error=>this.error= "Region" + this.region + "is valid"

    );
  }
}
