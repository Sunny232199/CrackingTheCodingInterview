import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-nav.service';
import { ReadJsonService } from '../services/read-json.service';
import { Chapter } from '../models/questions-and-answers.model';
import { NavigationEnd,  Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public sideNavService: SideNavService
    , public readJsonService: ReadJsonService, public _router: Router) {
    this.readJsonService.getJSON();
  }
  chapters: Chapter[];
  ngOnInit() {
    this.readJsonService.getChapters().subscribe(data => {
      this.chapters = data;
    });

    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }


}