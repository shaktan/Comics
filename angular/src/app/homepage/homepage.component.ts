import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  series = [];
  constructor(private serve: ServeService, private router: Router) { }

  ngOnInit() {
    // window.localStorage.clear();
    this.serve.getSeries().subscribe(res => {
      console.log(res);
      this.series = res.body;
    });
  }
  selectSeasons(id){
    this.router.navigate(['home/seasons',id]);
  }
}
