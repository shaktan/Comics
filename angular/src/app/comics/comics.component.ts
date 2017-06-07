import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics = [];
  seriesid:Number;
  seasonid:Number;

  constructor(private serve: ServeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {           //params observable always return a string of current url
      this.seriesid = parseInt(params['seriesid']);
      this.seasonid = parseInt(params['seasonid']);
    });

    this.serve.getComics(this.seriesid,this.seasonid).subscribe(res => {
      this.comics = res.body;
    });
  }

}
