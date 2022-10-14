import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { FormserviceService } from 'src/app/service/formservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  formregister: any = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    image: new FormControl('')
  })
  constructor(private formservice: FormserviceService, private Router: Router) { }
  id: any;
  User: any = [];

  ngOnInit(): void {

  }

  get form(): any {
    return this.formregister.controls;
  }
  onSubmit() {
    if (!this.formregister.invalid) {
      let pw1 = this.formregister.value.password;
      console.log(pw1)
      let pw2 = this.formregister.value.confirmPassword;
      this.formregister.patchValue({ image: 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg' })
      this.formservice.postUser(this.formregister.value).subscribe((data) => {
        if (pw1 != pw2) {
          alert("Passwords did not match");
        } else {
          alert("Password created successfully");
          if (data) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registered in successfully',
              showConfirmButton: false,
              timer: 1500
            })
            this.Router.navigate(['/user/login'])

          }
        }



      })
    }
    else {

    }
  }

  // const passField = document.getElementById('eye')?.setAttribute('class','fa-regular fa-eye');
  // const ShowPass = document.getElementById('eye')?.setAttribute('class','fa-regular fa-eye-slash')
  eye1() {
    let ShowPass: any = document.getElementById('pwd') as HTMLLIElement
    if (ShowPass.type === "password") {
      document.getElementById('eye')?.setAttribute('class', 'fa-regular fa-eye-slash'),
        document.getElementById('pwd')?.setAttribute('type', 'text')
    } else {
      document.getElementById('eye')?.setAttribute('class', 'fa-regular fa-eye ')
      document.getElementById('pwd')?.setAttribute('type', 'password')
    }


  }
  eye2(): void {
    let ShowPass: any = document.getElementById('pwd2') as HTMLLIElement
    if (ShowPass.type === "password") {
      document.getElementById('eye2')?.setAttribute('class', 'fa-regular fa-eye-slash'),
        document.getElementById('pwd2')?.setAttribute('type', 'text')
    } else {
      document.getElementById('eye2')?.setAttribute('class', 'fa-regular fa-eye ')
      document.getElementById('pwd2')?.setAttribute('type', 'password')
    }
  }

}
