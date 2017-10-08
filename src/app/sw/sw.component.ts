import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Sw } from './sw';
import { SwService } from './sw.service';

@Component({
  moduleId: module.id,
  selector: 'app-sw',
  templateUrl: './sw.component.html',
  styleUrls: [ './sw.component.scss' ],
  providers: [ SwService ]
})
export class SwComponent implements OnInit {
  sws: Sw[];
  errorMessage: string;
  mode = 'Observable';
  constructor(
    private swService: SwService
  ) {}
  ngOnInit() {
    const timer = Observable.timer(0, 5000000);
    timer.subscribe(() => this.getSws());
  }
  getSws() {
    this.swService.getSws()
      .subscribe(
        sws => this.sws = sws,
        error => this.errorMessage = <any>error
      );
  }
}
