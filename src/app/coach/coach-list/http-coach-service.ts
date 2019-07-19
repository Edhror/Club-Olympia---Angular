import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coach } from './coach';

export class HttpCoachService { 

    url = "http://localhost:8080/coach/list";
    constructor(private http: HttpClient) {
    }

    byId(id: number): Observable<Coach> {
        console.log("chiamato byId");
        return this.http.get<Coach> (this.url+"/"+id);
    }

    getAll() : Observable<Coach[]> {
        return this.http.get<Coach[]> (this.url);
    } 
}