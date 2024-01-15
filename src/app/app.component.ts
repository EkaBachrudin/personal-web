import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('toggleButton')
  toggleButton!: ElementRef;
  @ViewChild('menu')
  menu!: ElementRef;

  param = { value: 'world' };
  title = 'personal-web';
  dark: boolean | undefined;
  isLangToggleActive: boolean = false;
  lang: string | null = localStorage.getItem('lang');

  constructor(public translate: TranslateService, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.toggleButton.nativeElement &&
        e.target !== this.menu.nativeElement
      ) {
        this.isLangToggleActive = false;
      }
    });
  }

  ngOnInit(): void {
    let mode = localStorage.getItem('mode');
    !mode
      ? localStorage.setItem('mode', 'light')
      : (this.dark = mode == 'dark' ? true : false);
    this.lang ? this.translate.use(this.lang) : this.translate.use('en');
  }

  changeMode(): void {
    this.dark = !this.dark;
    this.dark
      ? localStorage.setItem('mode', 'dark')
      : localStorage.setItem('mode', 'light');
  }

  openToggleLang() {
    this.isLangToggleActive = !this.isLangToggleActive;
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
