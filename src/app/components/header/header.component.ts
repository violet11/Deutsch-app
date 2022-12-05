import { Component } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { links } from 'src/app/seznami/links-seznam';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMenu = false;
  burgerClass = "menu-btn_burger";
  navClass = "navbar";
  links = links;
  title = "Willst du deutch lernen?";

  constructor(private screenService: ScreenService) {}


  onClick() {
    if (this.screenService.mobileScreen) {
      !this.showMenu ?
        (this.burgerClass = "menu-btn_burger open",
        this.navClass = "navbar open",
        this.showMenu = true) :
        this.onTitleClick();
    }
  }

  onTitleClick() {
    this.burgerClass = "menu-btn_burger";
    this.navClass = "navbar";
    this.showMenu = false;
  }
}
