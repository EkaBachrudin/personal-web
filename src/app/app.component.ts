import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-web';
  dark: boolean | undefined;

  ngOnInit(): void {
    let mode = localStorage.getItem('mode');
    if (mode == null) {
      localStorage.setItem('mode', 'light');
    } else {
      this.dark = mode == 'dark' ? true : false;
    }
  }

  changeMode(): void {
    this.dark = !this.dark;
    this.dark
      ? localStorage.setItem('mode', 'dark')
      : localStorage.setItem('mode', 'light');
  }
}
