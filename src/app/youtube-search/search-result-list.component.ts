/**
 * Created by SergST on 26.02.2017.
 */

import { Component } from "@angular/core";
import { SearchResult } from "./search-result-model"

@Component ({
  input: ['result'],
  selector : 'search-result-list',
  template: `<div>hello list</div>`
})
export class SearchResultListComponent{
  result: SearchResult[];
}
