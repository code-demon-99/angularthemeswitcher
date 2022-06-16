import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Option } from "../option";
import { ThemeService } from "../theme.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  @Input() options: any;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) { }

  changeTheme(themeToSet: string) {


    this.themeChange.emit(themeToSet);
    localStorage.setItem('current_theme', themeToSet)


  }
}
