import { CanDeactivate } from '@angular/router';
import { ReservationNewComponent } from './reservation-new.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReservationNewGuard implements CanDeactivate<ReservationNewComponent> {
    canDeactivate(component: ReservationNewComponent): Observable<boolean> | Promise<boolean> | boolean {

        if(component.reservationForm.dirty){
            return confirm(`Navigate away and lose all data of new reservation ?`);
        }
        return true;
    }
}