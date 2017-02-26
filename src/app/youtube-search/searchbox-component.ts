/**
 * Created by SergST on 25.02.2017.
 */

import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
} from "@angular/core";

import { Observable } from "rxjs/Rx";

import {SearchResult} from './search-result-model';
import {YouTubeService} from "./providers";

/**
 * SearchBox displays the search box and emits events based on the results
 */

@Component({
  outputs: ['loading', 'searchResults'],
  selector: "search-box",
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`,
  // providers: [YouTubeService]
})
export class SearchBoxInput implements OnInit {

  loading: EventEmitter <boolean> = new EventEmitter <boolean>();
  searchResults: EventEmitter <SearchResult[]> = new EventEmitter <SearchResult[]>();

  constructor(public youtube: YouTubeService, private el: ElementRef) {
  };

  ngOnInit(): void {

    console.log(this.el.nativeElement); //our element

    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')

      .map((e: any) => e.target.value) // extract the value of the input

      .filter((text: string) => text.length > 1) // filter out if empty

      .debounceTime(500) // only once every 500ms

      .do(() => this.loading.next(true)) // enable loading

      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query))
      .switch()

      // act on the return of the search
      .subscribe(
        (res: SearchResult[]) => {  //on success
          this.loading.next(false);
          console.log('ok ',res);
          this.searchResults.next(res);
        },
        (err: any) => {         // on error
          console.log('error ',err);
          this.loading.next(false);
        },
        () => {            // on completion
          this.loading.next(false);
          console.log('complete');
        }
      )
  }
}