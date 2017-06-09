import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HomepageComponent]
})
export class HeaderComponent implements OnInit {
  role:String;
  constructor(private router: Router , public home : HomepageComponent) { }

  ngOnInit() {
  }
  islogin(){
    // console.log(this.role);
    this.role = localStorage.getItem('role');
    if(this.role)
      return true;
    else
      return false;
  }
  checkadmin(){
    if(this.role = "admin")
      return true;
    else
      return false;
  }
  logout() {
   localStorage.removeItem('role');
   localStorage.removeItem('token');
   localStorage.removeItem('email');
  //  console.log(this.role);
   this.router.navigate(['/login']);
  }
}
