import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Sw } from './sw';
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
  value = '';
  mode = 'Observable';
  constructor(
    private swService: SwService
  ) {}
  ngOnInit() {
    this.getSws();
  }
  getSws() {
    this.swService.getSws()
      .subscribe(
        sws => this.sws = sws,
        error => this.errorMessage = <any>error
      );
  }
  searchSws(query, swatches) {
    return swatches.filter(sw => {
      const regex = new RegExp(query, 'gi');
      return sw.name.match(regex);
    });
  }
  onKey(event: any) {
    this.value = event.target.value;
    const matches = this.searchSws(this.value, this.sws);
    this.sws = matches;
  }
  decimalToHex(decimal) {
    return `#${ decimal.toString(16)}`;
  }
  hexToRGB(hex) {
    return `rgb(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)})`;
  }
  getAll() {
    this.getSws();
  }
}
