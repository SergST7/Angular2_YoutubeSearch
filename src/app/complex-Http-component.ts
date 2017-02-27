/**
 * Created by SergST on 27.02.2017.
 */

import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
  selector: "complex-http",
  template: `
    <h1>Complex request</h1>
    <button type="button" class="btn btn-primary search" (click)="makePost()">Make Post</button>
    <div *ngIf="loading">Loading...</div>
    <pre>{{ data | json }}</pre>
`
})
export class ComplexHttp {
  data: Object;
  loading: boolean;

  constructor(public http: Http){
  }

  makePost(){
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        title: "foo",
        description: 'bar',
        body: 'buz',
        userId: 3
      }))
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
        }
      )
  }
}
