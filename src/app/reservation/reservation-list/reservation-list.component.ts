import { Component, OnInit } from '@angular/core';
import { Reservation } from './reservation';
import { HttpReservationService } from './http-reservation-service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation [];

  constructor(private reservationService: HttpReservationService) { }

  ngOnInit() {
    this.reservationService.getAll().subscribe(
      rss => this.reservations=rss
    );
  }

}
