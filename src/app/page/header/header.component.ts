import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor() { }
  user:any

  ngOnInit(): void {
    this.user =  localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string ) : null;

  }
  Logout(){
      localStorage.removeItem('acc');
      this.user =  localStorage.getItem('acc') ? JSON.parse(localStorage.getItem('acc') as string ) : null;
      
  }

}
