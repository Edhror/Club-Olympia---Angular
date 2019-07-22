import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation-list/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpReservationService } from '../reservation-list/http-reservation-service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  reservation : Reservation;
  reservationForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private reservationService : HttpReservationService, private fb: FormBuilder) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    
 
    this.reservationForm = this.fb.group({
      timeGroup: this.fb.group({
        start: ['', [Validators.required]],
        end: ['', [Validators.required]]
      },
        { validator: timeMatcher }
      ),

      clientId: ['', [Validators.required]],
      courtId: ['', [Validators.required]],
      coachId: ['', [Validators.required]],
      cost: ['', [Validators.required]],

    });

    this.reservationService.byId(id).subscribe(
      r =>   {
        this.reservation = r;
        console.log("res");
        console.log(r);
      }
      );
  }

}
