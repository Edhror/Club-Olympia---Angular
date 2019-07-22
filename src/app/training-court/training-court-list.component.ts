import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation/reservation-list/reservation';
import { ActivatedRoute } from '@angular/router';
import { HttpReservationService } from '../reservation/reservation-list/http-reservation-service';
import { TrainingCourt } from './training-court';
import { HttpTrainingCourtService } from './http-training-court-service';

@Component({
  selector: 'app-training-court',
  templateUrl: './training-court-list.component.html',
  styleUrls: ['./training-court-list.component.css']
})
export class TrainingCourtListComponent implements OnInit {

  start:string;
  end:string;
  tipo:string;

  trainingCourts: TrainingCourt [];

  constructor(private route: ActivatedRoute,private trainingCourtService: HttpTrainingCourtService) { }

  ngOnInit() {

    this.trainingCourtService.byTimeRangeAndSport(this.start, this.end, this.tipo).subscribe(
      tt => this.trainingCourts = tt,
      r => console.log(r) 
    );
      
  }
 

}
