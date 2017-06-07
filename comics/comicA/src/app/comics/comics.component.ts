import { Component, OnInit } from '@angular/core';
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

  constructor(private serve: ServeService) { }

  ngOnInit() {
    this.serve.getComics(this.seriesid,this.seasonid).subscribe(res => {
      console.log(res);
      this.comics = res.body;
    });
  }

}
