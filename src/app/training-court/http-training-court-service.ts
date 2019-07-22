
import { TrainingCourt } from './training-court';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class HttpTrainingCourtService{

    private baseUrl = "http://localhost:8080/api/training-camp";
    constructor(private httpClient : HttpClient){

    }


    public byTimeRangeAndSport(start:string, end:string, tipo:string) : Observable<TrainingCourt[]> {

        if(start && end && tipo){
            this.baseUrl += `?start=${start}&end=${end}&tipo=${tipo}`;
        }
        return this.httpClient.get<TrainingCourt[]>(this.baseUrl);

    }
}