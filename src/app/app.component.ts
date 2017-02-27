import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>Hello {{name}}</h1>
    <simple-http></simple-http>
    <hr>
    <complex-http></complex-http>
    <hr>
    <search-result-list></search-result-list>
    </div>
`
})
export class AppComponent  { name = 'Angular'; }
