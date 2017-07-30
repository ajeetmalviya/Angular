import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/Http';
// import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {

  private username: string = 'bradtraversy';
  private clinet_id: string = '37db912c6cb50756a652';
  private clinet_secret: string = '24beb1e1421a0dbeb5df989c97ba90d3958c0e59';

  baseURL: string = 'https://api.github.com/users/';

  constructor(private _http: Http) {

  }

  getUser() {
    return this._http.get(this.baseURL + this.username)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get(this.baseURL + this.username + '/repos')
      .map(res => res.json());
  }

  updateUsername(username: string) {
    this.username = username;
  }
}
