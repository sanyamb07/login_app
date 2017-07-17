import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {CustomValidators} from './../custom-validators';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  constructor(private fb: FormBuilder, 
              private authService: AuthService, private router: Router
            ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      password: ['', Validators.required]
    });
  }

  login(){
    this.authService.login(this.loginForm.value)
                    .then(res => {
                      localStorage.setItem('username', res['data'].username);
                      this.router.navigate(['/profile']);
                    })
                    .catch(err => {
                      this.loginForm.setErrors({
                        invalidLogin: true
                      });
                    });
  }

}
