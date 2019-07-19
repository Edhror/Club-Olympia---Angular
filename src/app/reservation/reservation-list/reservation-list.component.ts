import { Component, OnInit } from '@angular/core';
import { Reservation } from './reservation';
import { HttpReservationService } from './http-reservation-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation [];

  constructor(private route: ActivatedRoute,private reservationService: HttpReservationService) { }

  ngOnInit() {

    this.getAll();
      
  }
  delete(id:number): void {

    this.reservationService.delete(id).subscribe(() => this.getAll());
  }

  getAll(): void{
    this.reservationService.getAll().subscribe(
      rss => { this.reservations=rss;
        console.log(this.reservations);
      }
    );
  }

}
