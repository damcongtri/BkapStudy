import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { stringify } from 'querystring';
import { FormserviceService } from 'src/app/service/formservice.service';

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
 
  constructor(private formservice: FormserviceService, private Router : Router) { }
  ngOnInit(): void {
  }
  get form(): any {
    return this.formlogin.controls;
  }
  onSubmit(): void {
    if (!this.formlogin.invalid) {
      this.formservice.getUser(this.formlogin.value).subscribe((data)=>{
      if(data[0]){
        localStorage.setItem('acc',JSON.stringify({
          name:data[0].name,
          image:data[0].image,
          id:data[0].id,
          email:data[0].email,
        }));
        this.Router.navigate(['/']);
      }
      else {

      }

     
      })
     
      
    }
  }
  eye1() {
    let ShowPass: any = document.getElementById('pwd') as HTMLLIElement
    if (ShowPass.type === "password") {
      document.getElementById('eye_')?.setAttribute('class', 'fa-regular fa-eye-slash'),
        document.getElementById('pwd')?.setAttribute('type', 'text')
    } else {
      document.getElementById('eye_')?.setAttribute('class', 'fa-regular fa-eye ')
      document.getElementById('pwd')?.setAttribute('type', 'password')
    }


  }

}
