import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { AlertModule } from 'ngx-bootstrap';
import { HttpModule }    from '@angular/http';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MovieSearchComponent } from './search/movie-search.component';

import { AppService }          from './app.service';
import { AppRoutingModule }     from './app-routing.module';

//import {WebStorageModule, LocalStorageService} from "angular-localstorage";
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HomeComponent,
    SearchComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
   // WebStorageModule,
    AlertModule.forRoot()
  ],
  providers: [AppService],
  //providers: [AppService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
