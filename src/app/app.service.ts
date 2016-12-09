import { Injectable } from '@angular/core';
import { Http, ResponseOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class FixerService {

  public currencyList: any = [];
  public latestRates: any;

  constructor(private http: Http) { }

  // Get all the rates base
  public getRates(base?: string) {

    // check if item exists on localstorage
    let data = localStorage.getItem(base);
    setTimeout(() => console.log(data), 1000);
    if (!data) {
      let url;
      if (base) {
        url = 'http://api.fixer.io/latest?base=' + base;
      } else {
        url = 'http://api.fixer.io/latest';
      }
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new ResponseOptions({ headers });

      return this.http.get(url, options)
        .map(res => res.json());
    } else {
      // Observable.create(data).subscribe(val => {
      //   console.log('val');
      // });
      return Observable.create(data);
    }

  }
}
