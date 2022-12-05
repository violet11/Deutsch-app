import { Component, OnInit } from '@angular/core';
import { ColorBox } from 'src/app/interfaces/colorBox-interface';
import { barve } from 'src/app/seznami/barve-seznam';
import { ScreenService } from 'src/app/services/screen.service';
import { StartService } from 'src/app/services/start.service';

@Component({
  selector: 'app-barve',
  templateUrl: './barve.component.html',
  styleUrls: ['./barve.component.scss']
})

export class BarveComponent implements OnInit {
  mobileScreen = this.screenService.mobileScreen;
  barveBox!: ColorBox;
  inputValue: string[] = [];
  navodilo = "Vstavi pravilne barve v nemščini";
  resetBtn = "";
  sporocilo = "KONEC";
  index = 0;
  startGame = false;
  odgovor = false;
  prikaziResitve = false;
  nextClick = false;

  constructor(private startService: StartService, private screenService: ScreenService) {}

  ngOnInit(): void {
  }

  get changeClass(): string { return this.startService.changeClass(this.startGame); }

  get endColors() { return this.index == barve.length; }

  get colorBoxes(): ColorBox[] {
    return this.mobileScreen ? 
    (this.resetBtn = "Na začetek", barve.filter(item => barve.indexOf(item) == this.index)) : 
    (this.resetBtn = "Ponastavi", barve);
  }

  startValue(value: boolean): void { this.startGame = value; }

  preveriOdgovor(value: boolean): void { this.odgovor = value; }

  delay(): void {
    setTimeout(() => {
      if (this.odgovor) {
        this.index += 1;
        this.odgovor = false;
        if (this.prikaziResitve) {
          this.resitveToggle();
        }
      }
      this.nextClick = false;
    }, 500);
  }

  clickNext(): void {
    this.nextClick = true;
    this.delay();
  }

  clickBack(): void {
    this.index -= 1;
    if (this.index < 0) { this.index = 0; }
  }

  resitveToggle(): void { this.prikaziResitve = !this.prikaziResitve; }

  ponastaviVajo(): void {
    this.inputValue = [];
    this.index = 0;
    this.sporocilo = "";
    if (this.prikaziResitve) { this.resitveToggle(); }
  }
}