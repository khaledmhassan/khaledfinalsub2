import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { MENU_ITEMS } from './dashboard-menu';
@Component({
  selector: 'app-dashboard',
  template: ` <ngx-main-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-main-layout>
  `
})
export class DashboardComponent implements OnInit {
  menu: NbMenuItem[];

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }
}
