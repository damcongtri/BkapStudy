import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
// import { type } from 'os';
=======
import { FormserviceService } from 'src/app/service/formservice.service';
>>>>>>> 1c2baecba9fd275bf44eaf816fbd307abf58cb67

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
    ])
  })
  constructor(private formservice: FormserviceService) { }
  id:any;
  User:any=[];
  
  ngOnInit(): void {

  }
  get form(): any {
    return this.formregister.controls;
  }
  onSubmit() {
    alert('ok')
    if (!this.formregister.invalid) {
      this.formservice.postUser(this.formregister.value).subscribe((data)=>{
        this.User = data;
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
