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
  mobileScreen = this.screenService.mobileScreen;

  constructor(private screenService: ScreenService) {}

  hideTitle(page: any): boolean { return this.mobileScreen && !page.isActive; }

  onClick(): void {
    if (this.mobileScreen) {
      !this.showMenu ?
        (this.burgerClass = "menu-btn_burger open",
        this.navClass = "navbar open",
        this.showMenu = true) :
        this.onTitleClick();
    }
  }

  headerClass(page: any): string {
    return !page.isActive && this.mobileScreen ? "header border" : "header";
  }

  onTitleClick(): void {
    this.burgerClass = "menu-btn_burger";
    this.navClass = "navbar";
    this.showMenu = false;
  }
}
