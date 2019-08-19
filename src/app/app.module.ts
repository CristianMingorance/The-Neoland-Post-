import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import {
  DataService
} from './Servicio/data.service'
import {
  ApiService
} from './Api/service.service'
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { GamesComponent } from './games/games.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const AppRoutes: Routes = [

  { path: "" , component: HomeComponent },
  { path: 'world', component: HomeComponent },
  { path: 'health', component: HealthComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'games', component: GamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/singup', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: '**', component: ErrorComponent },
]; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HealthComponent,
    BusinessComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    GamesComponent,
    ErrorComponent,
    LoginComponent,
    SingupComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(AppRoutes, {useHash:true})
  ],
  providers: [DataService,ApiService,HttpClient,],
  bootstrap: [AppComponent]
})
export class AppModule { }
