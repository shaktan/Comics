import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role:String;
  constructor(private router: Router) { }

  ngOnInit() {
    this.role = localStorage.getItem('role');
  }
  logout() {
   localStorage.removeItem('role');
   this.router.navigate(['/login']);
  }
}
