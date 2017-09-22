import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


import 'rxjs/add/observable/of';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { MovieSearchService } from './movie-search.service';
import {Movie} from '../movies';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: [ './movie-search.component.css' ],
  providers: [MovieSearchService]
})
export class MovieSearchComponent implements OnInit {
  movies: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private movieSearchService: MovieSearchService,
    private router: Router) {}


  search(term: string): void {
    //debugger;
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
   // debugger;
   //console.log(this.searchTerms);
    this.movies = this.searchTerms

      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap(term => term  
          
        ? this.movieSearchService.search(term)
     
        : Observable.of<Movie[]>([]))
      .catch(error => {
    
        console.log(error);
        return Observable.of<Movie[]>([]);
      });
       
  }
  gotoDetail(movie: Movie): void {
    let link = ['/search', movie.original_title];
    this.router.navigate(link);
  }

}


