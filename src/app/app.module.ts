import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { serviceInjectables } from './youtube-search/providers';

import { AppComponent }  from './app.component';
import { SimpleHttp }  from './simple-Http-component';
import { SearchBoxInput }  from './youtube-search/searchbox-component';
import { SearchResultItemComponent }  from './youtube-search/search-result-item.component';
import { SearchResultListComponent }  from './youtube-search/search-result-list.component';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
],
  declarations: [
    AppComponent,
    SimpleHttp,
    SearchBoxInput,
    SearchResultItemComponent,
    SearchResultListComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    serviceInjectables
  ]
})
export class AppModule { }
