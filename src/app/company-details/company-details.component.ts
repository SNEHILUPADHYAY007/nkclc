import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {LocalStorageService} from '../localStorage.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
x:Observable<object>;
y:any;
company:FormGroup;
a;
constructor(private router:Router,private activatedRouter:ActivatedRoute,private formBuilder:FormBuilder,private localStorageService: LocalStorageService) {
  
 }
 
 ngOnInit() {
  this.x=this.activatedRouter.paramMap.pipe(() =>window.history.state);
  this.y=this.x;

  this.company=this.formBuilder.group({
    comName:['',[Validators.required]],
    comDetails:['',[Validators.required]],
    flat:['',[Validators.required]],
    society:['',[Validators.required]],
    landmark:['',[Validators.required]],
    area:['',[Validators.required]],
    state:['',[Validators.required]],
    pincode:['',[Validators.required]],
  })

         
}

 get first():any{
  // console.log(this.company) 
  return this.company.get('comName');
 }

 get second():any{
   return this.company.get('comDetails');
 }

 get third():any{
   return this.company.get('flat');
 }

 get fourth():any{
   return this.company.get('society');
 }

 get fifth():any{
   return this.company.get('landmark')
 }

 get sixth():any{
   return this.company.get('area');
 }
 get seven():any{
   return this.company.get('state');
 }
 get eight():any{
   return this.company.get('pincode');
 }

 public errorMsg={
   name:[{type:'required',message:'required'}],
   details:[{type:'required',message:'required again'}],
   flat:[{type:'required',message:'fill pls'}],
   society:[{type:'required',message:'fill society'}],
   landmark:[{type:'required',message:'fill landmark'}],
   area:[{type:'required',message:'fill area'}],
   state:[{type:'required',message:'fill state'}],
   pincode:[{type:'required',message:'fill pincode'}]
 }

  

  check(){
    console.log(this.company.controls.comDetails.value); 
    this.localStorageService.storeOnLocalStorage('krish123',this.company.value);
    this.router.navigateByUrl('details',{state:{name:this.y.name,email:this.y.email,address:this.y.address,det:this.company.value}})
  }

  submit(){
    // console.log(this.company.value);
    
  }

}
