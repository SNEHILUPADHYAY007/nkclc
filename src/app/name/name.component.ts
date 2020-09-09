import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  item=[];
  name;
  email;
  data;
  single;
  public jsonObj:any;

  constructor(private router:Router) { 
    this.jsonObj=JSON;
  }

  ngOnInit(): void {
  }
  check(){
    this.single={
      name:this.name,
      email:this.email
    }
    // this.item.push(
    //   {name:this.name,email:this.email}
    // )
    // this.single=this.item[0];
    
      
    //console.log(this.item);
    this.router.navigateByUrl('address',{state:{name:this.name,email:this.email}});  
  }

}
