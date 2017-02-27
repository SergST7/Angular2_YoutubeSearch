/**
 * Created by SergST on 23.02.2017.
 */

import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
  selector: "simple-http",
  template: `
    <h2>Basic request</h2>
    <button type="button" class="btn btn-primary search" (click)="makeReq()">Make Request</button>
    <div *ngIf="loading">Loading...</div>
    <pre>{{ data | json }}</pre>
`
})
export class SimpleHttp {
  data: Object;
  loading: boolean;

  constructor(public http: Http){
  }

  makeReq(): void{
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe( (res: Response) => {
        this.data = res.json();
        this.loading = false;
      })
  }
}
