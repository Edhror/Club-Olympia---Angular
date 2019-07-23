import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coach } from './coach';
import { ItemForSelection } from './item-for-selection';





export class HttpCoachService { 
    url = "http://localhost:8080/api/coaches";
    constructor(private http: HttpClient) {
    }

    byId(id: number): Observable<Coach> {
        console.log("chiamato byId");
        return this.http.get<Coach> (this.url+"/"+id);
    }

    getAll() : Observable<ItemForSelection[]> {
        return this.http.get<ItemForSelection[]> (this.url);
    } 
}