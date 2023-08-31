import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styleUrls: ['./by-contry-page.component.css']
})
export class ByContryPageComponent implements OnInit{

  public countries:Country[]=[];
  public initialValue:string='';

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(country:string):void{
    this.countriesService.searchCountry(country)
    .subscribe(resp =>{
      this.countries = resp;
    })
  }
}
