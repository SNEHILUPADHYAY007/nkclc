import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
public jsonObj:any;
name;
email;
x: Observable<object>;
y:any;
address;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.jsonObj=JSON;
   }

  ngOnInit(): void {
    this.x=this.activatedRoute.paramMap.pipe(() =>window.history.state);
    
    this.y=this.x;
    
  }

  check(){
    this.router.navigateByUrl('company',{state:{name:this.y.name,email:this.y.email,address:this.address}})
  }

}
