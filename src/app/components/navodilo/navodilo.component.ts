import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navodilo',
  templateUrl: './navodilo.component.html',
  styleUrls: ['./navodilo.component.scss']
})
export class NavodiloComponent {
  @Input() navodilo = "";
  @Output() startEvent = new EventEmitter<boolean>();


  startClick() {
    this.startEvent.emit(true);
  }
}

