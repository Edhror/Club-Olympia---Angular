import { HttpClient } from '@angular/common/http';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';

export class HttpReservationService{

    url = "http://localhost:8080/api/reservations";
    constructor(private http: HttpClient){}

    byId(id: number) : Observable<Reservation>{
        console.log("chiamato byId");
        return this.http.get<Reservation>(this.url + "/" + id);
    }

    getAll(): Observable<Reservation[]>{
        return this.http.get<Reservation[]>(this.url);
    }

    delete(id: number) : Observable<{}> {
        const url = `http://localhost:8080/api/reservations/${id}`;
        return this.http.delete(url);
    }
}