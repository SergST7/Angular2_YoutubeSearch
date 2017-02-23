import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { SimpleHttp }  from './simple-Http-component';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SimpleHttp
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
