import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Beer } from './beer';
import { BEERS } from './beers';

@Injectable({
  providedIn: 'root'
})

export class BeersService {

  beersRequestUrl = 'http://localhost:3000/beers';

  getBeers(params: any): any {
    return this.http.get(this.beersRequestUrl, {
      params
    });
  }

  getTotalBeers(params: any): any {
    // removing limit parameter to get all results length
    const adjustedParams: any = {...params};
    adjustedParams._limit = '999';
    adjustedParams._page = '0';
    console.log('testing number of total beers', params);
    return this.http.get(this.beersRequestUrl, {
      params: adjustedParams
    });
  }

  constructor(private http: HttpClient) { }
}
