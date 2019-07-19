import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Court } from './court';

export class HttpCourtService{
    url = "http://localhost:8080/court/list";
    constructor(private http: HttpClient){}

    byId(id: number) : Observable<Court>{
        console.log("chiamato byId");
        return this.http.get<Court>(this.url + "/" + id);
    }

    getAll(): Observable<Court[]>{
        return this.http.get<Court[]>(this.url);
    }
}