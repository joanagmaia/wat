import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
