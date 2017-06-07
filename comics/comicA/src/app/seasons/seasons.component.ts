import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  seriesid:Number;
  seasons = [];
  constructor(private serve: ServeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {           //params observable always return a string of current url
      this.seriesid = parseInt(params['seriesid']);
      //this.departmentId2 = params['id'];              // error will occur while arithmatic operations
    })
    this.serve.getSeasons(this.seriesid).subscribe(res => {
      console.log(res);
      this.seasons = res.body;
    })
  }
  selectComics(id){
    this.router.navigate(['home/comics',this.seriesid,id]);
  }
}
