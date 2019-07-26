import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Court } from './court';
import { ItemForSelection } from 'src/app/coach/item-for-selection';

export class HttpCourtService{
    url = "http://localhost:8080/api/courts";
    constructor(private http: HttpClient){}

    byId(id: number) : Observable<Court>{
        console.log("chiamato byId");
        return this.http.get<Court>(this.url + "/" + id);
    }

    getAll(): Observable<ItemForSelection[]>{
        return this.http.get<ItemForSelection[]>(this.url);
    }
}