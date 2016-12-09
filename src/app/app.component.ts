import { Component, OnInit } from '@angular/core';
import { FixerService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public allBases: any;

  constructor(private fixerService: FixerService) {

  }

  ngOnInit() {
    this.fixerService.listLatest();
  }
}
