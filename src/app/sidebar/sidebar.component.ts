import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Letters',  icon: 'pe-7s-news-paper', class: '' },
    { path: 'user', title: 'Questionair Mapping',  icon:'pe-7s-user', class: '' },
    { path: 'table', title: 'Maintain Codes CAL',  icon:'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Maintain IS Codes',  icon:'pe-7s-graph', class: '' },
    { path: 'icons', title: 'Manage EC Codes',  icon:'pe-7s-science', class: '' },
    { path: 'maps', title: 'Manage EDS Codes',  icon:'pe-7s-map-marker', class: '' },
    { path: 'notifications', title: 'PCLA Messaging',  icon:'pe-7s-bell', class: '' },
    // { path: 'upgrade', title: 'Report',  icon:'pe-7s-rocket', class: 'active-pro' }
    // { path: 'upgrade', title: 'Print Address Label',  icon:'pe-7s-rocket', class: 'active-pro' },
    // { path: 'upgrade', title: 'Sale Report',  icon:'pe-7s-rocket', class: 'active-pro' },
    // { path: 'upgrade', title: 'NB report',  icon:'pe-7s-rocket', class: 'active-pro' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
