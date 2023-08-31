import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{

  public country?:Country;

  constructor(private activatedRoute:ActivatedRoute,
    private countriesService:CountriesService,
    private router:Router){}

    ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params =>{
        this.searchCountry(params['id']);
      });
  }

  searchCountry(code:string){
    this.countriesService.searchByCode(code)
      .subscribe(param =>{
        if(!param){
          return this.router.navigateByUrl('');
        }
        return this.country = param;
      })
  }
}
