import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpTrainingCampService } from '../http-training-camp-service';
import { TrainingCamp } from '../training-camp';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-training-camp-update',
  templateUrl: './training-camp-update.component.html',
  styleUrls: ['./training-camp-update.component.css']
})
export class TrainingCampUpdateComponent implements OnInit {
  trainingCamp : TrainingCamp;
  constructor(private route: ActivatedRoute, private router: Router, private trainingCampService: HttpTrainingCampService) { }

  ngOnInit() {
    let id:number = +this.route.snapshot.paramMap.get('id');
    this.trainingCampService.byId(id).subscribe(
     t => this.trainingCamp = t,
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
