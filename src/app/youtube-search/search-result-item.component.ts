/**
 * Created by SergST on 26.02.2017.
 */

import { Component } from "@angular/core";
import { SearchResult } from "./search-result-model"

@Component ({
  inputs: ['result'],
  selector : 'search-result-item',
  template: `
    <div class="col-md-3 col-sm-6">
      <div class="thumbnail">
        <img src="{{result.thumbnailUrl}}" alt="thumbnail">
        <div class="caption">
          <h3>{{result.title}}</h3>
          <p>{{result.description}}</p>
          <div>
            <a href="{{result.videoUrl}}" class="button btn-success" role="button">Watch</a>
          </div>
        </div>
      </div> 
    </div>
`
})
export class SearchResultItemComponent{
  result: SearchResult;
}
