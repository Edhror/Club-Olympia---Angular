import { Component } from '@angular/core';

@Component( {
  selector: 'pm-root', 
  template: 
      `
      
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container">
          <a [routerLink]="['/home']" class="navbar-brand ml-3">Club Olympia</a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"> 
              <a  [routerLink]="['/reservations']" class="nav-link">Reservation List</a>
            </li>
            <li class="nav-item">
              <a  [routerLink]="['/training-camp']" class="nav-link">Training Camps</a>
            </li>
            <li class="nav-item">
              <a  [routerLink]="['/courts']" class="nav-link">Court List</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div class="container">
       <router-outlet></router-outlet>
      </div>
      `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Club';
}
