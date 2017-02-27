import { Component } from '@angular/core';

@Component({
  selector: 'my-app-router',
  template: `
    <h1>Navigation Component</h1> 
    <nav class="navbar navbar-default">
      <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" [routerLink]="['home']">My App</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['simple']">Simple HTTP</a></li>
        <li><a [routerLink]="['complex']">Complex HTTP</a></li>
        <li><a [routerLink]="['searchyoutube']">Youtube Saerch</a></li>
       </ul>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div> 
`
})
export class NavigationComponent  {}
