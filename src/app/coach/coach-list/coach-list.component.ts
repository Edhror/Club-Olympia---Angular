import { Component, OnInit } from '@angular/core';



import { HttpCoachService } from '../http-coach-service';
import { ItemForSelection } from '../item-for-selection';

@Component({
    selector: 'app-coach-list',
    templateUrl: './coach-list.component.html',
    styleUrls: ['./coach-list.component.css']
  })

export class CoachListComponent implements OnInit {
  coaches:ItemForSelection [];

  constructor(private coachService: HttpCoachService) {

  }

  ngOnInit() {
    this.coachService.getAll().subscribe(
      cs=> this.coaches=cs 
    );

  }
}
