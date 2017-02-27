import { Component } from '@angular/core';

@Component({
  selector: 'my-app-router',
  template: `
    <div class="container">
      <h1>Navigation Component</h1> 
    </div>
    <router-outlet></router-outlet>
`
})
export class NavigationComponent  {}
