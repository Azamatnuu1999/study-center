
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  CURRENT_LANGUAGE: string = 'currentLanguage';
  LANGUAGE: string = 'en';
  /**
   * 
   */
  isCollapsed = false;
  sectionName!: string;
  currentLanguage = 'en';

  constructor(
    private translate: TranslateService
  ) {

    this.translate.setDefaultLang('en');
    this.currentLanguage = localStorage.getItem('currentLanguage') || 'en';
    this.translate.use(this.currentLanguage);
  }

  /**
   * 
   */
  currentLanguageChange(lang: string) {
    localStorage.setItem(this.CURRENT_LANGUAGE, lang)
    this.translate.use(lang)
  }
}
