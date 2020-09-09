import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from '../localStorage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
x:Observable<object>;
y:any;
j
krish=false;
data=[];
public i;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private localStorageService:LocalStorageService) {
    // const data=JSON.parse(localStorage.getItem('1'));
    // console.log(data);
    // const newTodo = 'todo'; 
    // this.localStorageService.storeOnLocalStorage(newTodo,this.j);
    
  }

  ngOnInit(): void {
    this.x=this.activatedRoute.paramMap.pipe(() =>window.history.state);
    this.y=this.x;
    
    this.i=(JSON.parse(localStorage.getItem(this.localStorageService.STORAGE_KEY)).length);
    //console.log(i,JSON.parse(localStorage.getItem(this.localStorageService.STORAGE_KEY))[0].newItem)
    for(var j=0;j<this.i;j++){
      this.data.push(JSON.parse(localStorage.getItem(this.localStorageService.STORAGE_KEY))[j].newItem);
    }
    
    console.log('data',this.data)
  }
  clear(){
    localStorage.clear();
    this.data.splice(0,this.data.length);
    this.krish=false;
  }

  xyz(){
    if(this.i<=3){
      this.router.navigateByUrl('/company');
    }
    else{
      this.krish=true;
    }
  }

}
