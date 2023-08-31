import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, pipe, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region.type';
import { CacheStore } from '../interfaces/cache-store';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private url:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient,) {
    this.loadFromLocalStorage();
   }

  public cacheStore:CacheStore ={
    byCapital:{term:'',countries:[]},
    byCountry:{term:'',countries:[]},
    byRegion:{countries:[]}
  };

  private searchCountryRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
            .pipe(
              catchError(()=>of([]))
            );
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  searchCapital(term:string):Observable<Country[]>{
      const url = `${this.url}/capital/${term}`;
      return this.searchCountryRequest(url)
                  .pipe(
                    tap((countries) => this.cacheStore.byCapital = {term,countries}),
                    tap(()=> this.saveToLocalStorage())
                  );
  }

  searchCountry(term:string):Observable<Country[]>{
    const url = `${this.url}/name/${term}`;
    return this.searchCountryRequest(url)
            .pipe(
              tap((countries)=>this.cacheStore.byCountry = {term,countries}),
              tap(()=> this.saveToLocalStorage())
            );
  }

  searchRegion(region:Region):Observable<Country[]>{
    const url =`${this.url}/region/${region}`;
    return this.searchCountryRequest(url)
            .pipe(
              tap((countries)=> this.cacheStore.byRegion = {region,countries}),
              tap(()=> this.saveToLocalStorage())
            );
  }

  searchByCode(code:string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.url}/alpha/${code}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0]:null),
      catchError(()=>of(null))
    )
  }


}
