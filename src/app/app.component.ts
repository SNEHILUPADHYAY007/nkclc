import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  name = '';
  email= '';
  item=[];
  joke=false;
  constructor(){}
  
  ngOnInit(){}
  
  check(){
    this.joke=true;
    this.item.push(
      {name:this.name,email:this.email}
    )
    console.log(this.item);
    //this.router.navigateByUrl('address',data)  
  }
}
