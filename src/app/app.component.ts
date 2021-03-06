import { Component, OnInit } from '@angular/core';
import { FixerService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currencyKeys: Array<any> = [];
  public bases: Array<any> = [];
  public currencies: any;

  public baseValue = 1;
  public exchangeValue;

  // constant Currency Rates
  public exchangeRate: any;
  public baseRate: any = 1;

  // set currently selected currency
  public currenctCurrency: string;
  constructor(private fixerService: FixerService) {

  }

  ngOnInit() {
    this._fetchRates();
  }

  public currencyChange(event) {
    this.exchangeValue = this.currencies[event] * this.baseValue;

    // change exchange value
    this.exchangeRate = this.currencies[event];

    // set as the current currency
    this.currenctCurrency = event;
  }

  public editCurrency() {
    if (Number(this.exchangeValue).toString() === 'NaN') {
      return;
    }

    this.baseValue = this.exchangeValue * this.baseRate / this.exchangeRate;
  }

  public editBase() {
     if (Number(this.baseValue).toString() === 'NaN') {
      return;
    }
    this.exchangeValue  = this.baseValue * this.exchangeRate;
  }

  public changeBase(base) {
    this._fetchRates(base);
  }

  private _fetchRates(base?: string) {
    this.fixerService.getRates(base)
    .subscribe(data => {
      // build the bases array
      this.bases = Object.keys(data.rates);
      this.bases.unshift(data.base);

      // build the currencies and currencyKeys array
      this.currencyKeys = Object.keys(data.rates);
      this.currencies = data.rates;

      // set Exchangevalue as the first value of rates
      this.exchangeValue = data.rates[this.currencyKeys[0]];

      // set the exchange rate
      this.exchangeRate = data.rates[this.currencyKeys[0]];
    });
  }

}
