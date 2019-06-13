import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  successMessage: string;

  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
