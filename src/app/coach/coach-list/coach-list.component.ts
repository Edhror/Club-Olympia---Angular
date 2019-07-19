import { Component, OnInit } from '@angular/core';
import { Coach } from './coach';
import { HttpCoachService } from './Http-coach-service';

@Component({
    selector: 'app-coach-list',
    templateUrl: './coach-list.component.html',
    styleUrls: ['./coach-list.component.css']
  })

export class CoachListComponent implements OnInit {
  coach:Coach [];

  constructor(private coachService: HttpCoachService) {

  }

  ngOnInit() {
    this.coachService.getAll().subscribe(
      cs=> this.coach=cs
    );
  }
}
