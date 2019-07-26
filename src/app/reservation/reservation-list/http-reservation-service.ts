import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';

export class HttpReservationService{

    url = "http://localhost:8080/api/reservations";
    constructor(private http: HttpClient){}

    add(res :Reservation) : Observable<string[]> {

        const head = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<string[]>(this.url, res, {headers : head});
    }

    byId(id: number) : Observable<Reservation>{
        console.log("chiamato byId");
        return this.http.get<Reservation>(this.url + "/" + id);
    }

    getReservations(start: string, end: string): Observable<Reservation[]>{
        let searchUrl = this.url;
        if(start && end){
            searchUrl += `?start=${start}&end=${end}`;
        }
        return this.http.get<Reservation[]>(searchUrl);
    }

    delete(id: number) : Observable<{}> {
        const url = `http://localhost:8080/api/reservations/${id}`;
        return this.http.delete(url);
    }
}