/**
 * Created by SergST on 23.02.2017.
 */

import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
  selector: "simple-http",
  template: `
    <h2>Basic request</h2>
    <button type="button" (click)="makeReq()">Make Request</button>
    <div *ngIf="loading">Loading...</div>
    <pre>{{ data | json }}</pre>
`
})
export class SimpleHttp {

}
