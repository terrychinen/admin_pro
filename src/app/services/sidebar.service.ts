import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/' },
        { title: 'Progress bar', url: 'progress' },
        { title: 'Graphics', url: 'graphic1' },
        { title: 'Promise', url: 'promise' },
        { title: 'Rxjs', url: 'rxjs' }
      ]
    }
  ];

  constructor() { }

}
