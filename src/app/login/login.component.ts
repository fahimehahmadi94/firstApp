import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  });


  constructor() { }

  ngOnInit(): void {
  }
  
  loginSubmit() {
    let loginForm = this.loginForm.value;
    console.warn(loginForm);
    localStorage.setItem('userName', JSON.stringify([loginForm.userName]));
    // localStorage.setItem('password', JSON.stringify([loginForm.password]));


  }
}
