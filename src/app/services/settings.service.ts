import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _linkTheme = document.querySelector('#theme');
  private _defaultThemeUrl = './assets/css/colors/red-dark.css';

  constructor() {
    const url = localStorage.getItem('theme') || this._defaultThemeUrl;
    this._linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this._linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

  checkCurrentTheme(links: NodeListOf<Element>) {
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this._linkTheme.getAttribute('href');

      if(btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    });
  }

}
