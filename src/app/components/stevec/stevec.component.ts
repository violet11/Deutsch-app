import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stevec',
  templateUrl: './stevec.component.html',
  styleUrls: ['./stevec.component.scss']
})
export class StevecComponent {
  @Input() stevci: any[] = [];

}
