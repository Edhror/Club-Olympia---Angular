import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation } from '../reservation-list/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpReservationService } from '../reservation-list/http-reservation-service';
import { ItemForSelection } from 'src/app/coach/item-for-selection';
import { HttpClientService } from 'src/app/client/http-client-service';
import { HttpCourtService } from 'src/app/court/court-list/http-court-service';

function timeMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  let startControl = c.get('start');
  let endControl = c.get('end');

  if (startControl.pristine || endControl.pristine) {
    return null;
  }

  let startMillis = Date.parse(startControl.value);
  let endtMillis = Date.parse(endControl.value);

  if (startMillis <= endtMillis) {
    return null;
  }
  return { 'match': true };
}

@Component({
  selector: 'app-reservation-new',
  templateUrl: './reservation-new.component.html',
  styleUrls: ['./reservation-new.component.css']
})
export class ReservationNewComponent implements OnInit {

  reservation: Reservation;
  clients: ItemForSelection[];
  courts: ItemForSelection[];
  reservationForm: FormGroup;
  showError = false;
  availableTimes : string[];

  constructor(private reservationService: HttpReservationService, private clientService: HttpClientService, 
    private courtService: HttpCourtService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.reservationForm = this.fb.group({
      timeGroup: this.fb.group({
        start: ['', [Validators.required]],
        end: ['', [Validators.required]]
      },
        { validator: timeMatcher }
      ),

      clientId: [null, [Validators.required]],
      courtId: [null, [Validators.required]],
      cost: ['', [Validators.required]],

    });

    this.clientService.getAll().subscribe(
      c => { this.clients = c; }
    );

    this.courtService.getAll().subscribe(
      cr => { this.courts = cr; }
    );
  }

  add(): void {

    const start = this.reservationForm.value.timeGroup.start;
    const end = this.reservationForm.value.timeGroup.end;
    const clientId = this.reservationForm.value.clientId;
    const courtId = this.reservationForm.value.courtId;
    const cost = this.reservationForm.value.cost;
  
    this.reservation = new Reservation(0, start, end, cost, courtId, clientId);
    console.log(this.reservation.toJSON());

    this.reservationService.add(this.reservation).subscribe(
      r => {
        console.log(r);
        this.availableTimes = r;
        this.showError = (r == null) ? false : true;
        if(r == null)
          this.router.navigateByUrl("/reservations");
      }
    );



  }
}
