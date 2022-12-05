import { Component } from '@angular/core';
import { links } from 'src/app/seznami/links-seznam';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  buttons = links;

}