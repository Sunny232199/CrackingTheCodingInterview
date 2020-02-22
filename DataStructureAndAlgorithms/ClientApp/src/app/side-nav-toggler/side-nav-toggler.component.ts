import { Component, OnInit } from '@angular/core';
 
import { SideNavService } from '../services/side-nav.service';
 
@Component({
  selector: 'side-nav-toggler',
  templateUrl: './side-nav-toggler.component.html'
})
export class SideNavTogglerComponent implements OnInit {
 
  constructor(public sideNavService: SideNavService) { }
 
  ngOnInit() {
  }
 
}