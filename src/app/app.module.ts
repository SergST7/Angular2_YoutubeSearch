import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { serviceInjectables } from './youtube-search/providers';
import { YouTubeService } from './youtube-search/providers';

import { AppComponent }  from './app.component';
import { SimpleHttp }  from './simple-Http-component';
import { ComplexHttp }  from './complex-Http-component';
import { SearchBoxInput }  from './youtube-search/searchbox-component';
import { SearchResultItemComponent }  from './youtube-search/search-result-item.component';
import { SearchResultListComponent }  from './youtube-search/search-result-list.component';
import { NavigationComponent }  from './navigation.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'simple', component: SimpleHttp},
  {path: 'complex', component: ComplexHttp},
  {path: 'search', component: SearchResultListComponent},
  {path: 'searchyoutube', redirectTo: 'search'},
];

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
],
  declarations: [
    AppComponent,
    SimpleHttp,
    ComplexHttp,
    SearchBoxInput,
    SearchResultItemComponent,
    SearchResultListComponent,
    NavigationComponent
  ],
  bootstrap:    [ NavigationComponent ],
  providers: [
    serviceInjectables,
    YouTubeService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
