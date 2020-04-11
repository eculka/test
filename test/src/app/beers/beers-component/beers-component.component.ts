import { Component, OnInit } from '@angular/core';

import { Beer } from '../beer';
import { BeersService } from '../beers.service';

import { faTh, faBars, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beers-component',
  templateUrl: './beers-component.component.html',
  styleUrls: ['./beers-component.component.scss']
})
export class BeersComponentComponent implements OnInit {

  faTh = faTh;
  faBars = faBars;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  beers: Beer[];
  totalBeers: Beer[];
  uniqueStyles: any;
  view = 'cards';

  // Loading state
  loaded = false;

  sortOptions: any = [
    {
      label: 'Name - a to z',
      _sort: 'name',
      _order: 'asc'
    },
    {
      label: 'Name - z to a',
      _sort: 'name',
      _order: 'desc'
    },
    {
      label: 'AVB - lowest first',
      _sort: 'abv',
      _order: 'asc'
    },
    {
      label: 'AVB - highest first',
      _sort: 'abv',
      _order: 'desc'
    },
    {
      label: 'IBU - lowest first',
      _sort: 'ibu',
      _order: 'asc'
    },
    {
      label: 'IBU - highest first',
      _sort: 'ibu',
      _order: 'desc'
    }
  ];

  sortOption: any = this.sortOptions[0];

  params: any  = {
    _page: '1',
    _limit: '12',
    _sort: this.sortOption._sort,
    _order: this.sortOption._order,
    q: ''
  };

  constructor(private beersService: BeersService) { }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beersService.getBeers(this.params).subscribe(beers => this.beers = beers);
    this.beersService.getTotalBeers(this.params).subscribe(totalBeers => this.totalBeers = totalBeers);
    window.scroll(0, 0);
  }

  public increasePage(): void {
    this.params._page = +this.params._page + 1;
    this.getBeers();
  }

  public decreasePage(): void {
    this.params._page = +this.params._page - 1;
    this.getBeers();
  }

  public changeView(view): void {
    this.view = view;
  }

  public sort() {
    this.params._sort = this.sortOption._sort;
    this.params._order = this.sortOption._order;
    this.getBeers();
  }

}
