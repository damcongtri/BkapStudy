import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  user:any;
  ngOnInit(): void {
      this.user = localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string ) : null;
      
  }

}
