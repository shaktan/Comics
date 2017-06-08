import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot) {
    var x = route.data;

    if (x[0].role == localStorage.getItem("role")) {
      return true;
    }
    else {
      alert("First Login As SuperAdmin!!!")
      this.router.navigate(['/login'])
      return false;
    }
  }

}
