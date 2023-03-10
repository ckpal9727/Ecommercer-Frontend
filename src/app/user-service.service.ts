import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
   url:string = 'https://localhost:7074/user';
 headers:object = { 'Content-Type': 'application/json' };
  constructor(private httpClient:HttpClient) { }

  saveUser(data:any){
    console.log(data);
    return this.httpClient.post(this.url,data,this.headers);
  }

  loginUser(data:any){
    // const header = { 'Content-Type': 'application/json' };
    // const params=new HttpParams().set('email','ck7@me.com').set('password','12');
    // const option={header,params};
    return this.httpClient.post('https://localhost:7074/user/login',data,this.headers);
  }
}
