import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
        let _data: any = JSON.stringify(data[0]);
        localStorage.setItem('acc',_data);
        console.log(_data);
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
