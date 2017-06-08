import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private serve: ServeService, private router: Router) { }

  ngOnInit() {

  }
  onSubmit(data){
    this.serve.login(data).subscribe(res => {
      // console.log(res);
      if(!res.success){
        alert(res.body);
      }
      else{
        // localStorage.removeItem('role');
        localStorage.setItem('role', res.body.role);
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.body.email)

        switch(res.body.role) {
         case "superadmin": this.router.navigate(["/superadmin"])
           break;
         case "admin": this.router.navigate(["/home"])
           break;
         case "user": this.router.navigate(["/home"])
           break;
         default:
           this.router.navigate(["/login"])
       }
      }


    });
    // this.serve.register(data);
  }
}
