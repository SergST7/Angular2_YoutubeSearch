/**
 * Created by SergST on 26.02.2017.
 */

import { Component } from "@angular/core";
import { SearchResult } from "./search-result-model"

@Component ({
  host:{'class':'col-lg-4 col-md-4 col-sm-6'},
  inputs: ['result'],
  selector : 'search-result-item',
  template: `
    <div>
      <div class="thumbnail">
        <img src="{{result.thumbnailUrl}}" alt="thumbnail">
        <div class="caption">
          <h3>{{result.title}}</h3>
          <p>{{result.description}}</p>
          <div>
            <a href="{{result.videoUrl}}"
             class="btn btn-primary btn-lg btn-block" 
             role="button" 
             target="_blank">Watch</a>
          </div>
        </div>
      </div> 
    </div>
`
})
export class SearchResultItemComponent{
  result: SearchResult;
}
