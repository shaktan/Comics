import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  users =[];
  constructor(private serve: ServeService, private router: Router) { }

  ngOnInit() {
    this.serve.getUsers().subscribe(res => {
    this.users = res.body;
    });
  }

}
