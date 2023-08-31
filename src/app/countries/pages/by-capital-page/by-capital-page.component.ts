import { Component, OnInit } from '@angular/core';
import { CountriesModule } from '../../countries.module';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit{

  public countries:Country[]=[];
  public initialValue:string ='';

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries= this.countriesService.cacheStore.byCapital.countries;
    this.initialValue= this.countriesService.cacheStore.byCapital.term;
  }


  searchByCapital(capital:string):void{
    this.countriesService.searchCapital(capital)
    .subscribe(resp =>{
      this.countries = resp;
    })
  }
}
