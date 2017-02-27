/**
 * Created by SergST on 27.02.2017.
 */

import { Component } from "@angular/core";
import {
  Http,
  Response,
  Headers,
  RequestOptions
} from "@angular/http";

@Component({
  selector: "complex-http",
  template: `
    <h1>Complex request</h1>
    <button type="button" class="btn btn-primary search" (click)="makePost()">Make Post</button>
    <button type="button" class="btn btn-primary search" (click)="deletePost()">Delete Post</button>
    <button type="button" class="btn btn-primary search" (click)="makeHeaders()">Make Req w/headers</button>
    <div *ngIf="loading">Loading...</div>
    <pre>{{ data | json }}</pre>
`
})
export class ComplexHttp {
  data: Object;
  loading: boolean;

  constructor(public http: Http){
  }

  makePost(): void{
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

  deletePost(): void{
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
        }
      )
  }

  makeHeaders(): void{

    this.loading = true;

    let headers: Headers = new Headers();
    headers.append('X-API-TOKEN', 'XXXYYYZZZ');

    let oprs: RequestOptions = new RequestOptions();
    oprs.headers = headers

    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
        }
      )
  }
}
