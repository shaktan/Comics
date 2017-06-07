export class Configuration {
  public api = {
    getseries : "http://localhost:2000/api/app/get_series",
    getseasons : "http://localhost:2000/api/app/get_seasons",
    getcomics : "http://localhost:2000/api/app/get_comics/:seriesId/:seasonId"
  }
}
