import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemForSelection } from '../coach/item-for-selection';

export class HttpClientService { 
    url = "http://localhost:8080/api/clients";
    constructor(private http: HttpClient) {
    }

    byId(id: number): Observable<ItemForSelection> {
        console.log("chiamato byId");
        return this.http.get<ItemForSelection> (this.url+"/"+id);
    }

    getAll() : Observable<ItemForSelection[]> {
        return this.http.get<ItemForSelection[]> (this.url);
    } 
}