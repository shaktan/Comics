import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serve: ServeService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(data){
    console.log(data);
    this.serve.register(data).subscribe(res => {

    });
    // this.serve.register(data);
  }
}
