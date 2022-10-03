import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  check: boolean = false
  formlogin: any = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }
  get form(): any {
    return this.formlogin.controls;
  }
  onSubmit(): void {
    if (!this.formlogin.invalid) {
    }
  }

}
