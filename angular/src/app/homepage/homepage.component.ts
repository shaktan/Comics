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
  query = "";
  sub:{
    seriesId: String,
    email: String
  }={
    seriesId:'',
    email:''
  }


homeFlag: Boolean = true;
seriesFlag: Boolean = false;
seasonsFlag: Boolean = false;
comicsFlag: Boolean = false;


  constructor(private serve: ServeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.query = location.search;
    console.log(this.query);
    this.serve.getSeries().subscribe(res => {
      console.log(res);
      this.series = res.body;
    });
    this.checkquery();

  }


  set(){
    this.flag = !this.flag;
  }

  // check whether you login as admin
  check(){
    this.role = localStorage.getItem('role');
    if(this.role === "admin")
      return true;
    else
      return false;
  }

  checkuser(){
    this.role = localStorage.getItem('role');
    if(this.role === "user")
      return true;
    else
      return false;
  }

  //matches the query parameter
  checkquery(){
    console.log(this.query);
    if(this.query == "?id=1"){
      this.homeFlag = false;
      this.seriesFlag = true;
      this.seasonsFlag = false;
      this.comicsFlag = false;
    }
    else if(this.query == "?id=2"){
      this.homeFlag = false;
      this.seriesFlag = false;
      this.seasonsFlag = true;
      this.comicsFlag = false;
    }
    else if(this.query == "?id=3"){
      this.homeFlag = false;
      this.seriesFlag = false;
      this.seasonsFlag = false;
      this.comicsFlag = true;
    }
    // else
    // alert('no page found error 404');
}



  selectSeasons(id){
    this.router.navigate(['home/seasons',id]);
  }
  addseries(data){
    this.serve.addSeries(data).subscribe(res=>{console.log(res)});
  }
  addseason(data){
    this.serve.addSeason(data).subscribe(res=>{console.log(res)});
  }
  subscribe(id){
    this.sub.seriesId=id;
    this.sub.email=localStorage.getItem('email');
    this.serve.subs(this.sub).subscribe(res => {console.log(res)});
  }
}
