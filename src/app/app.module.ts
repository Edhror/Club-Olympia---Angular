import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourtListComponent } from './court/court-list/court-list.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpReservationService } from './reservation/reservation-list/http-reservation-service';
import { HttpCourtService } from './court/court-list/http-court-service';
import { HttpCoachService } from './coach/http-coach-service'; 
import { ReservationUpdateComponent } from './reservation/reservation-update/reservation-update.component';
import { TrainingCampListComponent } from './training-camp/training-camp-list.component';
import { HttpTrainingCampService } from './training-camp/http-training-camp-service';
import { TrainingCampUpdateComponent } from './training-camp/training-camp-update/training-camp-update.component';
import { ReservationNewComponent } from './reservation/reservation-new/reservation-new.component';
import { HttpClientService } from './client/http-client-service';
import { ReservationNewGuard } from './reservation/reservation-new/reservation-new.guard';
import { ReservationResolver } from './reservation/reservation-list/reservation-resolver';

@NgModule({
  declarations: [
    AppComponent,
    CourtListComponent,
    ReservationListComponent,
    HomeComponent,
    ReservationUpdateComponent,
    TrainingCampListComponent,
    TrainingCampUpdateComponent,
    ReservationNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'reservations', component: ReservationListComponent, resolve: {reservations : ReservationResolver} },
      { path: 'reservations-new', canDeactivate : [ReservationNewGuard] , component: ReservationNewComponent },
      { path: 'reservations/:id', component: ReservationUpdateComponent },
      { path: 'courts', component: CourtListComponent },
      { path: 'training-camp', component: TrainingCampListComponent },
      { path: 'training-camp/:id', component: TrainingCampUpdateComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),

  ],
  providers: [HttpReservationService, HttpCoachService, HttpCourtService, HttpTrainingCampService, HttpClientService, ReservationResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
