import { Component, OnInit } from '@angular/core';

import { BeersService } from '../beers.service';

// Importing font awesome icons
import { faTh, faBars, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Importing beer interface
import { Beer } from '../beer';

interface SortOption {
  label: string;
  _sort: string;
  _order: string;
}

interface Params {
  _page: any; // Changing to 'any' as required for page calculations
  _limit: any; // Changing to 'any' as required for limit calculations
  _sort: string;
  _order: string;
  q: string;
}

@Component({
  selector: 'app-beers-component',
  templateUrl: './beers-component.component.html',
  styleUrls: ['./beers-component.component.scss']
})

export class BeersComponentComponent implements OnInit {

  // Defining font awesome icons
  faTh = faTh;
  faBars = faBars;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  // Setting up component variables
  beers: Beer[];
  totalBeers: Beer[];
  view = 'cards';

  // Defining sortOptions
  sortOptions: SortOption[] = [
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

  // Setting default sort option as first one in the sort options array
  sortOption: SortOption = this.sortOptions[0];

  // Defining default data display params
  params: Params  = {
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

    // Getting total beers separately as this would most likely be the case in real application
    this.beersService.getTotalBeers(this.params).subscribe(totalBeers => this.totalBeers = totalBeers);
    window.scroll(0, 0);
  }

  getPaginationInfo(): string {
    const startingResult = this.beers.length < 1 ? 0 : (((this.params._page - 1) * this.params._limit) + 1);
    const endingResult = this.beers.length + ((this.params._page - 1) * this.params._limit);
    const totalResults = this.totalBeers.length;
    return  startingResult + ' - ' + endingResult + ' of ' + totalResults + ' results';
  }

  public changePage(value): void {
    this.params._page = +this.params._page + (value);
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
