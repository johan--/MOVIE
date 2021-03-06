import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Movie} from '../movies';


import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: AppService,
    private route: ActivatedRoute,
    private location: Location,
   
  ) { }
 
  ngOnInit() {
   
  this.route.paramMap
    .switchMap((params: ParamMap) => {
     // console.log(this.movieService.getMovie(params.get('name')))
      return this.movieService.getMovie(params.get('name'))
    })
    .subscribe(movies => {        
        return this.movies = movies
    });
    /* this.movieService.getMovie()
        .then(movies=>{
        this.movies = movies;
        });
    */
  }
  
  gotoFav(movie: Movie): void {
    var data = [];
    data = JSON.parse(window.localStorage.getItem("data"));
    if(data==null) {
      data = [];
    }
    data.push(movie);
    window.localStorage.setItem('data', JSON.stringify(data));
  }
  goPopular():void{
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      return this.movieService.goPopular()
    })
    .subscribe(movies => {        
        return this.movies = movies
    });
  }
  goLatest():void{
    this.route.paramMap
    .switchMap((params: ParamMap) => {
      return this.movieService.goLatest()
    })
    .subscribe(movies => {        
        return this.movies = movies
    });
  }
}
