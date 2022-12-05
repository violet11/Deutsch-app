import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';
import { ColorBox } from 'src/app/interfaces/colorBox-interface';

@Component({
  selector: 'app-barva-item',
  templateUrl: './barva-item.component.html',
  styleUrls: ['./barva-item.component.scss']
})

export class BarvaItemComponent {
  @Input() barveBox!: ColorBox;
  @Input() inputValue: string[] = [];
  @Input() resitve = false;
  @Input() nextClick = false;
  @Output() odgovor = new EventEmitter<boolean>();
  mobileScreen = this.screenService.mobileScreen;
  pravilenOdgovor = "Pravilno :)";
  napacenOdgovor = "?";

  constructor(private screenService: ScreenService) {}

  get inputLength(): boolean { return this.inputValue.length > 0 }

  get prikaziSkrijResitve(): string { return this.resitve ? "prikazi-resitve" : "skrij-resitve"; }

  get feedbackText(): string {
    return this.matchOdgovor() ? this.pravilenOdgovor : this.napacenOdgovor;
  }

  onChange() {
    this.odgovor.emit(this.matchOdgovor());
  }

  getInputRegex(): string | undefined {
    let regex = /[^\s]*\wß*/;
    let value = this.inputValue.toString();
      return value.match(regex) !== null ? value.match(regex)?.toString() : "";
  }

  matchOdgovor(): boolean {
    return this.getInputRegex() == this.barveBox.color;
  }
}
