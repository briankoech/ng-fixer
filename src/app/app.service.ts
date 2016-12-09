import { Injectable } from '@angular/core';
import { Http, ResponseOptions, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
const url = 'http://api.fixer.io/latest';


@Injectable()
export class FixerService {

  public currencyList: any;
  public latestRates: any;

  constructor(private http: Http) {}

  // Get all the rates base
  public listLatest() {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new ResponseOptions({headers});

    this.http.get(url, options)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data);
    });
  }
}
