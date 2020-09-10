import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {LocalStorageService} from '../localStorage.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product1:FormGroup;
images=[];
  constructor(private formBuilder:FormBuilder,private localStorage:LocalStorageService,private router:Router) {}

  ngOnInit(): void {
    this.product1=this.formBuilder.group({
      product:['',[Validators.required]],
      specification:['',[Validators.required]],
      imageinformation:['',[Validators.required]]
    })
  }

  get first1():any{
    return this.product1.get('product');
  }

  get second1():any{
    return this.product1.get('specification');
  }

  public error12={
    product:[{type:'required',message:'enter product'}],
    specification:[{type:'required',message:'enter specification'}],
  }

  getFile(){
    document.getElementById('upfile_new').click();
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
                reader.onload = (event:any) => {
                  
                   this.images.push([
                     event.target.result,
                   ]); 
                   
                   
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
    console.log(this.images);
  }
  submit(){}

  sub(){
    
    this.router.navigateByUrl('/details');
  }
}
