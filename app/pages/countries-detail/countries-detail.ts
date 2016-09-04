import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {CountryService} from '../../providers/country-service/country-service';
//import the Country model
import {CountryModel} from '../../models/country_model'


/*
  Generated class for the CountriesDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/countries-detail/countries-detail.html',
  providers: [CountryService]
})
export class CountriesDetailPage {
  countrymodel:CountryModel= new CountryModel;
  selectedCountry:any;
  name:string;
  country=[];

  error;

  constructor(private navCtrl: NavController, navParams: NavParams, private countryService:CountryService) {
    //if we get to this page we have selected country available
   this.name=navParams.get('name');
   // this.getSpecificCountryy(this.name);
  this.country
     this.countryService.getSpecificCountry(this.name)
         .subscribe(
           data => {
             console.log(data),
             this.country = data},
           error => {this.error}
         );

         console.log(this.country);

  }
  

}
