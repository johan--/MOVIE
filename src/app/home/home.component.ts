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
  valueexit: string;
  movies: string;
  constructor(private router: Router) { 
    
  }
  getFavorite():void{
    //debugger;
     //this.movies = window.localStorage.getItem('films');
     this.movies = JSON.parse(window.localStorage.getItem("data"));
     
     //console.log(this.movies);
  }
  gotoDis(idx:number):void{   
    //debugger;
    //console.log(idx);
    var data=[];
    data = JSON.parse(window.localStorage.getItem("data"));
     data.splice(idx, 1);  
     window.localStorage.setItem('data', JSON.stringify(data));
     window.location.reload();
   // window.localStorage.removeItem('data');   
    
  }
  firstLoad(){
    // debugger;
    var data=[];
    data = JSON.parse(window.localStorage.getItem("data"));
    // console.log("ss" + data.length)
    if ( data.length !== 0) this.valueexit = 'valueexit'
  }
  ngOnInit() {
    this.firstLoad();
    this.getFavorite();
  }

}
