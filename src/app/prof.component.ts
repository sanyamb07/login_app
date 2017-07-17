import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: `./prof.component.html`,
  styleUrls: ['./login/prof.component.css']
})
export class ProfComponent implements OnInit{
    user: User;
    constructor(private authService: AuthService){}

    ngOnInit(){
      this.authService.getUser(localStorage.getItem("username"))
                      .then((res:User) => {
                        this.user = res;
                        console.log(this.user);
                      }).catch(err => console.log(err));
    }
}
