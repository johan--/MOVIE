import { Injectable } from '@angular/core';
/*import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
*/
import {Movie} from './movies';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AppService {

  movies : any = {};
  //private url = 'https://api.themoviedb.org/3/search/movie?api_key=c6ea6031412642a807ae3589783d57dc&query=';
  constructor(private http: Http) {
  }
 
  /*getMovie(){
   this.http.get(this.url)
  .map((res:Response) => res.json())
  .subscribe(movies=>{
      this.movies = movies.results;
      console.log(this.movies);
    })

  }*/


getMovie(name: string): Promise<Movie[]> {
  return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=c6ea6031412642a807ae3589783d57dc&query=${name}`)
             .toPromise()
             .then(response => response.json().results as Movie[])
/*             .then(response => {
               debugger
               return response.json().results as Movie[]
              })
*/
             .catch(this.handleError);           
}
goPopular(): Promise<Movie[]> {
  return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=c6ea6031412642a807ae3589783d57dc`)
             .toPromise()
             .then(response => response.json().results as Movie[])
             .catch(this.handleError);           
}
goLatest(): Promise<Movie[]> {
  return this.http.get(`https://api.themoviedb.org/3/movie/latest?api_key=c6ea6031412642a807ae3589783d57dc`)
             .toPromise()
             .then(response => response.json().results as Movie[])
             .catch(this.handleError);           
}
private handleError(error:any): Promise<any> {
  //console.error('An error occured', error);
  return Promise.reject(error.message || error);

}
}