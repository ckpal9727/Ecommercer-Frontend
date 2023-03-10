import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private userService:UserServiceService){}
  myForm = new FormGroup({
    name: new FormControl('', ),
    email: new FormControl('',),
    mobile: new FormControl('', ),
    password: new FormControl('', ),
  });
 
 
  Register() {
   var data=this.userService.saveUser(this.myForm.value).subscribe(e=>{
    console.log(e);
   })
  
   
    
  }

}
