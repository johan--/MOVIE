import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Movie} from '../movies';
import { Router }            from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:string;
  constructor(private router: Router) { 
    
  }
  getFavorite():void{
    //debugger;
     //this.movies = window.localStorage.getItem('films');
     this.movies = JSON.parse(window.localStorage.getItem("data"));
     
     console.log(this.movies);
  }
  gotoDis(idx:number):void{   
    //debugger;
    //console.log(idx);
    var data=[];
    data = JSON.parse(window.localStorage.getItem("data"));
     data.splice(idx, 1);  
     window.localStorage.setItem('data', JSON.stringify(data));
     //this.router.navigate(['/home']);
     window.location.reload();
   // window.localStorage.removeItem('data');   
    
  }
  ngOnInit() {
    this.getFavorite();
  }

}
