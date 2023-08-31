import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit{

  public countries:Country[]=[];
  public initialRegion?:Region;

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initialRegion = this.countriesService.cacheStore.byRegion.region;
  }

  public regions:Region[] = ['Africa','Asia','Americas','Europe','Oceania']

  public selectedRegion?:Region;

  searchByRegion(region:Region):void{
    this.countriesService.searchRegion(region)
    .subscribe(resp => {
      this.countries = resp;
      this.selectedRegion=region;
    });
  }
}
