/**
 * Created by SergST on 26.02.2017.
 */

import { Component } from "@angular/core";
import { SearchResult } from "./search-result-model"

@Component ({
  input: ['result'],
  selector : 'search-result-item',
  template: `<div>hello item</div>`
})
export class SearchResultItemComponent{
  result: SearchResult;
}
