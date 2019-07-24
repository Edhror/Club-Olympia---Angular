
import { TrainingCamp } from './training-camp';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemForSelection } from '../coach/item-for-selection';
import { ClientEnrollment } from './client-enrollment';

export class HttpTrainingCampService {

    private baseUrl = "http://localhost:8080/api/training-camp";
    constructor(private httpClient: HttpClient) {

    }


    public byTimeRangeAndSport(start: string, end: string, tipo: string): Observable<TrainingCamp[]> {
        let url = this.baseUrl;
        if (start && end && tipo) {
            url += `?start=${start}&end=${end}&tipo=${tipo}`;
        }
        return this.httpClient.get<TrainingCamp[]>(url);

    }

    delete(id: number): Observable<void> {
        let url = `${this.baseUrl}/${id}`;
        return this.httpClient.delete<void>(url);
    }

    byId(id: number): Observable<TrainingCamp> {
        return this.httpClient.get<TrainingCamp>(this.baseUrl + "/" + id);
    }

    update(trainingCamp: TrainingCamp): Observable<void> {
        let url = `${this.baseUrl}/${trainingCamp.id}`;
        const head = new HttpHeaders({ 'Content-Type': 'application/json' });
        console.log(trainingCamp);
        console.log(JSON.stringify(trainingCamp));
        return this.httpClient.put<void>(url, trainingCamp, { headers: head });
    }

    clientsByTrainingCamp(id: number): Observable<ItemForSelection[]> {
        let url = `${this.baseUrl}/${id}/clients`;
        return this.httpClient.get<ItemForSelection[]>(url);
    }

    availableClientsByTrainingCamp(id: number): Observable<ItemForSelection[]> {
        let url = `${this.baseUrl}/${id}/clients?status=notEnrolled`;
        return this.httpClient.get<ItemForSelection[]>(url);
    }

    enrollCamp(id: number, clientId: number) : Observable<void>{
        let url = `${this.baseUrl}/${id}/clients/${clientId}`;
        const head = new HttpHeaders({ 'Content-Type': 'application/json' });
        let enr = new ClientEnrollment(clientId, id, "enroll");
        return this.httpClient.put<void>(url, enr, { headers: head });
      }

    leaveCamp(id: number, clientId: number): Observable<void> {
        let url = `${this.baseUrl}/${id}/clients/${clientId}`;
        const head = new HttpHeaders({ 'Content-Type': 'application/json' });
        let enr = new ClientEnrollment(clientId, id, "cancel");
        return this.httpClient.put<void>(url, enr, { headers: head });
    }

}