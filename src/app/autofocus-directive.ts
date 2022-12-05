import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { ScreenService } from './services/screen.service';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private element: ElementRef, private screen: ScreenService) {}

  ngAfterViewInit() {
    if (this.screen.mobileScreen) {
      this.element.nativeElement.focus();
    }
  }
}