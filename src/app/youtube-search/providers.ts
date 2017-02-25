
/**
 * Created by SergST on 24.02.2017.
 */

import {
  Http,
  Response
} from "@angular/http";

import {
  Injectable,
  Inject
} from "@angular/core";

import { Observable } from "rxjs";
import { SearchResult } from './search-result-model';

let YOUTUBE_API_KEY: string = "AIzaSyAyMONPDO7l3sxN0kDoVtfq1w_lW2fGQeY";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

export var serviceInjectables: Array<any> = [
  {provide: YouTubeService, useClass: YouTubeService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
  ];

/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */
@Injectable()
export class YouTubeService {

  constructor (public http: Http,
               @Inject (YOUTUBE_API_KEY) private apiKey: string,
               @Inject (YOUTUBE_API_URL) private apiUrl: string,
  ){};

  search(query: string): Observable<SearchResult[]>{
    let param: string = [
      `q = ${query}`,
      `key = ${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}?${param}`;

    return this.http.get(queryUrl)
      .map((res: Response) => {
        return (<any>res.json()).items.map( (item: any) => {
          console.log('raw item: ', item)
        })
    })
  }
}
