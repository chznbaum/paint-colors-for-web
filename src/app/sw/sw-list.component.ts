import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Sw } from './sw-list';
import { SwService } from './sw.service';

@Component({
  moduleId: module.id,
  selector: 'app-sw',
  templateUrl: './sw-list.component.html',
  styleUrls: [ './sw-list.component.scss' ],
  providers: [ SwService ]
})
export class SwListComponent implements OnInit {
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
