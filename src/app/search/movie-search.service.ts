import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Movie} from '../movies';

@Injectable()
export class MovieSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Movie[]> {
    //console.log(term);
    return this.http
               .get(`https://api.themoviedb.org/3/search/movie?api_key=c6ea6031412642a807ae3589783d57dc&query=${term}`)
              // .map(response => response.json().result as Movie[]);

               .map((response) => {
                var result = response.json().results  as Movie[];
              //  console.log(result);
                return result;
               });
  }
}