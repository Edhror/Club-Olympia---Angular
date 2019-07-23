import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation/reservation-list/reservation';
import { ActivatedRoute } from '@angular/router';
import { HttpReservationService } from '../reservation/reservation-list/http-reservation-service';
import { TrainingCamp } from './training-camp';
import { HttpTrainingCampService } from './http-training-camp-service';

@Component({
  selector: 'app-training-camp',
  templateUrl: './training-camp-list.component.html',
  styleUrls: ['./training-camp-list.component.css']
})
export class TrainingCampListComponent implements OnInit {

  start: string;
  end: string;
  tipo: string;

  trainingCamps: TrainingCamp[];

  constructor(private route: ActivatedRoute, private trainingCourtService: HttpTrainingCampService) { }

  ngOnInit() {
    this.getCamps();
  }

  filterCamps() {
    this.getCamps();
  }


  getCamps() {
    console.log(this.start);
    console.log(this.end);
    console.log(this.tipo);

    this.trainingCourtService.byTimeRangeAndSport(this.start, this.end, this.tipo).subscribe(
      tt => this.trainingCamps = tt,
      r => console.log(r)
    );
  }

  delete(id:number): void{
    this.trainingCourtService.delete(id).subscribe(() => this.getCamps());
  }

}
