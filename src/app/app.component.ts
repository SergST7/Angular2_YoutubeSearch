import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <simple-http></simple-http>
`,
})
export class AppComponent  { name = 'Angular'; }
