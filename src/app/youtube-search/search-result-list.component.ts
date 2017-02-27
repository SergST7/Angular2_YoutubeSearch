/**
 * Created by SergST on 26.02.2017.
 */

import { Component } from "@angular/core";
import { SearchResult } from "./search-result-model"

@Component ({
  selector : 'search-result-list',
  template: `
 <div class="container">
  <div class="page-header">
    <h1>Youtube Search</h1>
    <div class="row search">
      <div class="input-group input-group-lg col-md-12">
        <search-box
            (loading)="loading=$event"
            (searchResults)="updateResults($event)">
        </search-box>
      </div>
    </div>
    <img *ngIf="loading" src="images/loading.gif">
    <div class="row">
      <search-result-item
          *ngFor="let result of res"
          [result]="result">
      </search-result-item>
     </div>
  </div>
 </div>
`
})
export class SearchResultListComponent{
  res: SearchResult[];

  updateResults(results: SearchResult[]):void {
    this.res = results;
    console.log(this.res);
  }
}
