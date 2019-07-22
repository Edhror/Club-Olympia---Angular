import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourtListComponent } from './court/court-list/court-list.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpReservationService } from './reservation/reservation-list/http-reservation-service';
import { HttpCourtService } from './court/court-list/http-court-service';
import { ReservationUpdateComponent } from './reservation/reservation-update/reservation-update.component';
import { TrainingCourtListComponent } from './training-court/training-court-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourtListComponent,
    ReservationListComponent,
    HomeComponent,
    ReservationUpdateComponent,
    TrainingCourtListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      { path: 'reservations', component: ReservationListComponent},
      { path: 'reservations/:id', component: ReservationUpdateComponent},
      { path: 'courts', component: CourtListComponent},
      { path: 'training-court', component: TrainingCourtListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    
  ],
  providers: [ HttpReservationService, HttpCourtService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
