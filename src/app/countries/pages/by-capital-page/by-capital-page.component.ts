import { Component } from '@angular/core';
import { CountriesModule } from '../../countries.module';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  constructor(private countriesService:CountriesService){}

  public countries:Country[]=[];

  searchByCapital(capital:string):void{
    this.countriesService.searchCapital(capital)
    .subscribe(resp =>{
      this.countries = resp;
    })
  }
}
