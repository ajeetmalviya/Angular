import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Services/github.service';



@Component({
  moduleId: module.id,
  selector: 'app-github',
  templateUrl: 'github.component.html',
  providers: [GithubService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  user: Array<any>;
  repos: any;
  username: string;

  constructor(private _githubService: GithubService) {

  }

  search() {

    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })


    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}
