import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>Hello {{name}}</h1>
    <simple-http></simple-http>
    <search-box></search-box>
    <search-result-item></search-result-item>
    </div>
`
})
export class AppComponent  { name = 'Angular'; }
