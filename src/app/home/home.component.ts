import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Movie} from '../movies';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:string;
  constructor() { 
    
  }
  getFavorite():void{
    //debugger;
     //this.movies = window.localStorage.getItem('data');
     this.movies = JSON.parse(window.localStorage.getItem("data"));
     
     console.log(this.movies);
  }
  gotoDis():void{   
    window.localStorage.removeItem('data');   
    
  }
  ngOnInit() {
    this.getFavorite();
  }

}
