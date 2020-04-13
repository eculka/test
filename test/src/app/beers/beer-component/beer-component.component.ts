import { Component, OnInit, Input } from '@angular/core';

import { Beer } from '../beer';

@Component({
  selector: 'app-beer-component',
  templateUrl: './beer-component.component.html',
  styleUrls: ['./beer-component.component.scss']
})
export class BeerComponentComponent implements OnInit {

  @Input() beer: Beer;
  @Input() view: string;

  constructor() { }

  ngOnInit(): void {
  }

}
