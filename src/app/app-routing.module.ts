import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AboutPageComponent } from "./shared/pages/about-page/about-page.component";


const routes:Routes =[
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
})

export class AppRoutingModule{

}