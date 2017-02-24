/**
 * Created by SergST on 24.02.2017.
 */

let YOUTUBE_API_KEY: string = "AIzaSyAyMONPDO7l3sxN0kDoVtfq1w_lW2fGQeY";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

export var serviceInjectables: Array<any> = [
  {provide: YouTubeService, useClass: YouTubeService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
  ];