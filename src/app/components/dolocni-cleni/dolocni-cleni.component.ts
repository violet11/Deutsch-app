import { Component, OnInit } from '@angular/core';
import { seznamBesed } from 'src/app/seznami/besede-seznam';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { RandomSeznam } from 'src/app/methods/random-seznam';
import { StorageService } from 'src/app/services/storage.service';
import { Rezultat } from 'src/app/methods/rezultat';
import { ScreenService } from 'src/app/services/screen.service';
import { StartService } from 'src/app/services/start.service';
import { Stevec } from 'src/app/interfaces/stevec-interface';
import { GameData } from 'src/app/interfaces/gameData-interface';

@Component({
  selector: 'app-dolocni-cleni',
  templateUrl: './dolocni-cleni.component.html',
  styleUrls: ['./dolocni-cleni.component.scss']
})
export class DolocniCleniComponent implements OnInit {
  cleni: any[] = [[], [], []];
  stevci: any;
  seznamBesed = seznamBesed;
  rezultat = new Rezultat(this.seznamBesed);
  mobileScreen = this.screenService.mobileScreen
  randomBesede = new RandomSeznam();
  navodilo = "Pravilno razvrsti besede glede na določne člene der die ali das";
  yes = "Čestitke, vse besede so pravilno razvrščene :)";
  delno = "Pravilno razvrsti spodnje besede";
  no = "Zmanjkalo je premikov. Več sreče prihodnjič :(";
  steviloRandom = 18;
  steviloRandomMobile = 6;
  startGame = false;
  match = false;
  dolocniCleniData: any;

  constructor(private storageService: StorageService, private startService: StartService,
    private screenService: ScreenService) {}

  ngOnInit(): void {
    this.start();
    this.setStevecData();
  }

  start() {
    localStorage['dolocniCleniData'] ?
      (!this.naZacetek() ? (this.startGame = true) :
      (localStorage.removeItem("dolocniCleniData"), this.getStartData())) :
      this.getStartData();
  }

  getStartData() {
    let seznamBesedSkupni = seznamBesed[0].besede.concat(seznamBesed[1].besede, seznamBesed[2].besede);
    this.dolocniCleniData = <GameData>{
      seznamSkupni: seznamBesedSkupni,
      seznamTrenutni: this.randomBesede.ustvariRandomSeznam(this.getSteviloRandom(), seznamBesedSkupni),
      steviloPravilnih: 0,
      steviloPremikov: this.mobileScreen ? 52 : 40,
      box: [[], [], []]
    }
  }

  naZacetek(): boolean {
    this.pridobiPodatkeStorage();
    return (this.dolocniCleniData.steviloPremikov == 0 && !this.onAllMatch() || 
      (this.dolocniCleniData.seznamTrenutni.length == this.steviloRandomMobile && !this.mobileScreen) ||
      (this.dolocniCleniData.seznamTrenutni.length == this.steviloRandom && this.mobileScreen));
  }

  ponastavi(): void {
    localStorage.removeItem("dolocniCleniData");
    this.getStartData();
    this.setStevecData();
  }

  startClass(): string { return this.startService.changeClass(this.startGame); }

  startValue(value: boolean): void { this.startGame = value; }

  drop(event: CdkDragDrop<string[]>, index: number): void {
    event.previousContainer === event.container ?
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex) :
      (event.currentIndex = 0,
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex),
      this.onDropTrenutneBesede(event.previousIndex),
      this.onBesedaMatch(event.container.data[event.currentIndex], index),
      this.shraniPodatkeStorage()
      );
  }

  noReturnPredicate() { return false; }

  setStevecData(): void {
    let skupnoStevilo = this.dolocniCleniData.seznamSkupni.length;
    let preostaleBesede = skupnoStevilo - skupnoStevilo % this.dolocniCleniData.seznamTrenutni.length; 
    let trenutneBesedeStevilo = this.dolocniCleniData.seznamTrenutni.filter((item: string) => item !== "").length;

    this.stevci = <Stevec[]> [
        {
          stevilo: preostaleBesede > 0 ? preostaleBesede + trenutneBesedeStevilo : trenutneBesedeStevilo,
          tekst: "besed"
        },
        {
          stevilo: this.dolocniCleniData.steviloPremikov,
          tekst: "premikov"
        },
        {
          stevilo: this.dolocniCleniData.steviloPravilnih,
          tekst: "pravilnih"
        }
      ]
  }

  dodajPrazenProstor(index: number): void {
    if (this.dolocniCleniData.seznamTrenutni.length == this.getSteviloRandom() - 1) {
      this.dolocniCleniData.seznamTrenutni.splice(index, 0, "");
    }
  }

  dodajTrenutneBesede(): void {
    this.dolocniCleniData.seznamTrenutni = this.randomBesede.ustvariRandomSeznam(this.getSteviloRandom(), this.dolocniCleniData.seznamSkupni);
  }

  onDropTrenutneBesede(index: number): void {
    this.dolocniCleniData.seznamTrenutni.every((item: string) => item == "")  ?
      this.dodajTrenutneBesede() : this.dodajPrazenProstor(index);
  }

  getSteviloRandom(): number { return !this.mobileScreen ? this.steviloRandom : this.steviloRandomMobile; }

  onBesedaMatch(data: any, index: number): void {
    this.rezultat.besedaMatch(data, index) ? this.dolocniCleniData.steviloPravilnih++ : this.dolocniCleniData.steviloPravilnih;
  }

  onAllMatch(): boolean {
    return this.rezultat.allMatch(this.dolocniCleniData.box);
  }

  konecPremikov(data: any, index: number): boolean {
    return (this.stevci[1].stevilo == this.stevci[0].stevilo || this.rezultat.besedaMatch(data, index))
  }

  endNaslov(): string {
    return this.endSporocilo() !== this.delno ? (this.endSporocilo() == this.yes ? "Jeej!" :
      "Game Over") : "";
  }

  endSporocilo(): string {
    return !this.onAllMatch() ? (this.stevci[1].stevilo !== 0 ? this.delno : this.no) : this.yes;
  }

  shraniPodatkeStorage(): void {
    this.dolocniCleniData.steviloPremikov--;
    this.storageService.saveData("dolocniCleniData", this.dolocniCleniData);
    this.setStevecData()
  }

  pridobiPodatkeStorage(): void {
    typeof(Storage) !== "undefined" ?
      this.dolocniCleniData = this.storageService.getData("dolocniCleniData") :
      this.dodajTrenutneBesede();
  }

  hideShowClass(item:string): string { return item == "" ? "rBeseda hide" : "rBeseda"; }
  
}