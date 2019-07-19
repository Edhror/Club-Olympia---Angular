import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourtListComponent } from './court/court-list/court-list.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpReservationService } from './reservation/reservation-list/http-reservation-service';
import { HttpCourtService } from './court/court-list/http-court-service';

@NgModule({
  declarations: [
    AppComponent,
    CourtListComponent,
    ReservationListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      { path: 'reservations', component: ReservationListComponent},
      { path: 'courts', component: CourtListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    
  ],
  providers: [ HttpReservationService, HttpCourtService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
