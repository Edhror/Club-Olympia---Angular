import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpTrainingCampService } from '../http-training-camp-service';
import { TrainingCamp } from '../training-camp';
import { NgForm } from '@angular/forms';
import { ItemForSelection } from '../../coach/item-for-selection';
import { HttpCoachService } from 'src/app/coach/http-coach-service';

@Component({
  selector: 'app-training-camp-update',
  templateUrl: './training-camp-update.component.html',
  styleUrls: ['./training-camp-update.component.css']
})
export class TrainingCampUpdateComponent implements OnInit {
  trainingCamp : TrainingCamp;
  coaches : ItemForSelection[];
  clients : ItemForSelection[];
  constructor(private route: ActivatedRoute, private router: Router,
     private trainingCampService: HttpTrainingCampService,
     private coachService :HttpCoachService) { }

  ngOnInit() {
    let id:number = +this.route.snapshot.paramMap.get('id');
    this.trainingCampService.byId(id).subscribe(
     t => {
       this.trainingCamp = t;
      console.log(t);
    },
     e => {
       console.log(e);
       alert(e);
     }
    );
    this.coachService.getAll().subscribe(
      cc => {
        this.coaches = cc;
        console.log(cc)
      },
      e => {
        console.log(e);
        alert(e);
      }
     );
     this.trainingCampService.clientsByTrainingCamp(id).subscribe(
      cc => {
        this.clients = cc;
        console.log(cc)
      },
      e => {
        console.log(e);
        alert(e);
      }
     );
  }

  update(updateForm: NgForm): void{
    console.log(updateForm.value);
    console.log(this.trainingCamp);
    this.trainingCampService.update(this.trainingCamp).subscribe(
      () => this.router.navigate(['/training-camp']),
      e =>{
        console.log(e);
        alert(e);
      }
    );
  }

}
