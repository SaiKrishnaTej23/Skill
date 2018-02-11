import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  NavItems : NavItem[] = [];
  constructor() { }

  ngOnInit() {
    this.NavItems.push({DisplayName:'user-profile', Route: '/user-profile'});
  }

}
