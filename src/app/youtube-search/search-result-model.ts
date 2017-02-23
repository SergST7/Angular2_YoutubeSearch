/**
 * Created by SergST on 24.02.2017.
 */

export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any){
    this.id            = obj && obj.id || null;
    this.title         = obj && obj.id || null;
    this.description   = obj && obj.id || null;
    this.thumbnailUrl  = obj && obj.id || null;
    this.videoUrl      = obj && obj.id || `https://www.youtube.com/watch?v=${this.id}`;
  }
}
