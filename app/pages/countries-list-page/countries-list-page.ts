import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CountriesDetailPage} from '../countries-detail/countries-detail';
import {CountryService} from '../../providers/country-service/country-service';


/*
  Generated class for the CountriesListPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/countries-list-page/countries-list-page.html',
  providers:[CountryService]
})
export class CountriesListPagePage {
  selectedCountry:any;
  countries=[];
  error:string;


  constructor(public navCtrl: NavController, navParams: NavParams, private countryService: CountryService) {
  this.countryService = countryService;
 

  }
   getAllCountries(){
     this.error = "";
        this.countries = [];
        this.countryService.getAllCountries()
         .subscribe(
            data => this.countries = data,
            error => this.error
         );

  }

   goToDetailsPage($event, name) {
    this.navCtrl.push(CountriesDetailPage, {
      name: name
    });
   
  }
 

}
