import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { serviceInjectables } from './youtube-search/providers';

import { AppComponent }  from './app.component';
import { SimpleHttp }  from './simple-Http-component';
import { SearchBoxInput }  from './youtube-search/searchbox-component';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
],
  declarations: [
    AppComponent,
    SimpleHttp,
    SearchBoxInput
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    serviceInjectables
  ]
})
export class AppModule { }
