/**
 * Created by SergST on 25.02.2017.
 */

import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef
} from "@angular/core";

import { SearchResult } from './search-result-model';
import { YouTubeService } from "./providers";

/**
 * SearchBox displays the search box and emits events based on the results
 */

@Component({
  //output: ['loading', 'searchResult'],
  selector: "search-box",
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`,
  providers: [YouTubeService]
})
export class SearchBoxInput implements OnInit{
  loading: EventEmitter <boolean> = new EventEmitter <boolean>();
  searchResult: EventEmitter <SearchResult[]> = new EventEmitter <SearchResult[]>();

  constructor(public youTube: YouTubeService, private el: ElementRef){};

  ngOnInit(): void{

  }
}