import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Configuration } from "./config";

@Injectable()
export class ServeService {

  constructor(private http: Http, private url: Configuration) { }
  token;
  register(data) {
    console.log(data);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url.api.register, data, headers)
      .map((res: Response) => res.json());
  }

  login(data) {
    // console.log(data);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    // 'Authorization': 'Bearer '+ this.token
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url.api.login, data, headers)
      .map((res: Response) => res.json());
  }

  getUsers() {
    return this.http.get(this.url.api.getusers)
      .map((res: Response) => res.json())
      .catch(this.errHandler);
  }

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
    return this.http.get(this.url.api.getcomics + "/" + seriesId + "/" + seasonId)
      .map((res: Response) => res.json())
      .catch(this.errHandler);
  }

  errHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
settoken(token){
  this.token = token;
}
}
