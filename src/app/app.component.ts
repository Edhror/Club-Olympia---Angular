import { Component } from '@angular/core';

@Component( {
  selector: 'pm-root', 
  template: 
      `
      <nav class="navbar navbar-expand navbar-light bg-light">
         <b><a [routerLink]="['/home']" class="navbar-brand">Club Olympia</a></b>
         <ul class="nav nav-pills">
           <li> 
            <a  [routerLink]="['/reservations']" class="nav-link">Reservation List</a>
            </li>
            <li>
            <a  [routerLink]="['/courts']" class="nav-link">Court List</a>
            </li>
         </ul>
      </nav>
      <div class="container">
       <router-outlet></router-outlet>
      </div>
      `
})

export class AppComponent {
  title = 'Club';
}
