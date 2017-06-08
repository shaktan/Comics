import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  series = [];
  role:String;
  flag = false;
  query:any;
  sub:{
    seriesId: String,
    email: String
  }={
    seriesId:'',
    email:''
  }

  constructor(private serve: ServeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = location.search;
    this.serve.getSeries().subscribe(res => {
      console.log(res);
      this.series = res.body;
    });
  }


  set(){
    this.flag = !this.flag;
  }

  // check whether you login as admin
  check(){
    // console.log(this.role);
    this.role = localStorage.getItem('role');
    if(this.role === "admin")
      return true;
    else
      return false;
  }

  //matches the query parameter
  checkquery(){
    if(this.query === "?id=1")
      return true;
    else
      return false;
  }
  selectSeasons(id){
    this.router.navigate(['home/seasons',id]);
  }
  addseries(data){
    this.serve.addSeries(data).subscribe(res=>{console.log(res)});
  }
  subscribe(id){
    this.sub.seriesId=id;
    this.sub.email=localStorage.getItem('email');
    this.serve.subs(this.sub).subscribe(res => {console.log(res)});
  }
}
