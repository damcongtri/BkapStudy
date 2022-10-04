import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

}
