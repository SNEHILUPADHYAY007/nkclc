import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
x:Observable<object>;
y:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.x=this.activatedRoute.paramMap.pipe(() =>window.history.state);
    this.y=this.x;
    
  }

}
