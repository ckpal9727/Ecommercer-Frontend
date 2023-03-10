import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private userService:UserServiceService){}


  loginForm=new FormGroup({
    email: new FormControl('',),
    password: new FormControl('',),
  })
  Login(){
    console.log(this.loginForm.value);
    this.userService.loginUser(this.loginForm.value).subscribe(e=>{
      console.log(e);
    })
  }
}
