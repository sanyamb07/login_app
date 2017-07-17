import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { UserLogin, User } from './models/user';
import {users} from './userList';


@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(user: UserLogin): Promise<Object>{
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // return this.http.post('http://ec2-54-69-219-242.us-west-2.compute.amazonaws.com:9000/v1/customer/login/', 
    //                       JSON.stringify(user), {headers})
    //                 .map(res => res.json())
    //                 .catch(this.handleError);
    if(user.email === "nimesh.aug11@gmail.com" && user.password === "password"){
      var data :User = {
        bio: "The Startup Guy",
        username: "NimeshVerma",
        email: "nimesh.aug11@gmail.com"
      }

      var res = {
        meta: "",
        data
      }
      return Promise.resolve(res);
    }
      
    
    return Promise.reject("Username or password is incorrect");
    
  }

  getUser(username:string):Promise<User>{
    var result = users.find((user) => {
      return user.username === username;
    });
    if(!result){
      return Promise.reject('Username not found');
    }
    return Promise.resolve(result);
  }

  logout(){
    localStorage.removeItem('username');
  }

  // private handleError(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }

}
