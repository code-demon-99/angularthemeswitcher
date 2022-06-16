import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../theme.service';
import { Option } from "../option";

@Component({
  selector: 'app-topandside',
  templateUrl: './topandside.component.html',
  styleUrls: ['./topandside.component.scss']
})
export class TopandsideComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private readonly themeService: ThemeService) { }

  options$: Observable<Array<Option>> = this.themeService.getThemeOptions();

  // constructor() { }

  ngOnInit() {
    if (localStorage.getItem('current_theme')) {
      const currenttheme: any = localStorage.getItem('current_theme') ? localStorage.getItem('current_theme') : "deeppurple-amber"

      this.themeService.setTheme(currenttheme);
    }
  }

  themeChangeHandler(themeToSet: any) {
    this.themeService.setTheme(themeToSet);
  }
}
