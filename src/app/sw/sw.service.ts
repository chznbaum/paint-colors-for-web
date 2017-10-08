import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Sw } from './sw-list';

@Injectable()
export class SwService {
  private swUrl = 'https://www.sherwin-williams.com/color-visualization/services/color/SW/all';
  constructor(
    private http: Http
  ) {}
  getSws(): Observable<Sw[]> {
    return this.http.get(this.swUrl)
               .map((response: Response) => <Sw[]>response.json())
               .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || '' } ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
