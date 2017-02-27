/**
 * Created by SergST on 27.02.2017.
 */

import { Component } from "@angular/core";
import { Http, Response } from "@angular/http";

@Component({
  selector: "complex-http",
  template: `
    <h2>Complex request</h2>
   
`
})
export class ComplexHttp {
  data: Object;
  loading: boolean;

  constructor(public http: Http){
  }

}
