import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpReservationService } from './http-reservation-service';

@Injectable({
    providedIn: 'root'
})
export class ReservationResolver implements Resolve<Reservation[]> {

    constructor(private reservationService: HttpReservationService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Reservation[]>{
        return this.reservationService.getReservations("", "");
    }
    
}