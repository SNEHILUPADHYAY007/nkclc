import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
x:Observable<object>;
y:any;
comName;
comDetails
  constructor(private router:Router,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.x=this.activatedRouter.paramMap.pipe(() =>window.history.state);
    this.y=this.x;
  }

  check(){
    this.router.navigateByUrl('details',{state:{name:this.y.name,email:this.y.email,address:this.y.address,company:this.comName,details:this.comDetails}})
  }

}
