import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StyleManagerService } from './style-manager.service';
import { Option } from './option';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) { }

  getThemeOptions(): Observable<Array<Option>> {
    return this.http.get<Array<Option>>("assets/options.json");
  }

  setTheme(themeToSet: any) {
    this.styleManager.setStyle(
      "theme",
      `assets/${themeToSet}.css`
    );
  }
}
