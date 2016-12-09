import { Injectable } from '@angular/core';
import { Http, ResponseOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class FixerService {

  public currencyList: any = [];
  public latestRates: any;

  constructor(private http: Http) {}

  // Get all the rates base
  public getRates(base?: string) {
    let url;
    if (base) {
       url = 'http://api.fixer.io/latest?base=' + base;
    } else {
      url = 'http://api.fixer.io/latest';
    }
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new ResponseOptions({headers});

    return this.http.get(url, options)
    .map(res => res.json());
  }
}
