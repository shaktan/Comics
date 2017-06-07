import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Configuration } from "./config";

@Injectable()
export class ServeService {

  constructor(private http: Http, private url: Configuration) { }

  getSeries() {
    return this.http.get(this.url.api.getseries)
      .map((res: Response) => res.json())
      .catch(this.errHandler);
  }

  getSeasons(seriesId) {
    return this.http.get(this.url.api.getseasons + "/" + seriesId)
      .map((res: Response) => res.json())
      .catch(this.errHandler);
  }

  getComics(seriesId, seasonId) {
    return this.http.get(this.url.api.getseasons + "/" + seriesId + "/" + seasonId)
      .map((res: Response) => res.json())
      .catch(this.errHandler);
  }

  errHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

}
