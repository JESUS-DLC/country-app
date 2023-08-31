import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styleUrls: ['./by-contry-page.component.css']
})
export class ByContryPageComponent {

  constructor(private countriesService:CountriesService){}

  public countries:Country[]=[];

  searchByCountry(country:string):void{
    this.countriesService.searchCountry(country)
    .subscribe(resp =>{
      this.countries = resp;
    })
  }
}
