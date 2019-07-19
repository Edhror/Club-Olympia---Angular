import { Component, OnInit } from '@angular/core';
import { Court } from './court';
import { HttpCourtService } from './http-court-service';

@Component({
  selector: 'app-court-list',
  templateUrl: './court-list.component.html',
  styleUrls: ['./court-list.component.css']
})
export class CourtListComponent implements OnInit {

  courts: Court [];

  constructor(private courtService: HttpCourtService) { }

  ngOnInit() {
    this.courtService.getAll().subscribe(
      css => this.courts=css
    );
  }

}
