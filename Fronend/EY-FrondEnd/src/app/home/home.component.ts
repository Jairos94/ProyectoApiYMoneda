import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../active';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
name:string=GlobalConstants.userActive.userName;

Administrator:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.kindUser();
  }
kindUser(){
  if(GlobalConstants.userActive.userRol===1){
    this.Administrator=true;
  }
  else{
    this.Administrator=false;
  }
}
}
