import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IState } from '../redux/feature1.model';

@Injectable({
    providedIn: 'root',
})
export class Feature1DataService {
    constructor(protected readonly http: HttpClient) {}

    getData(): Observable<IState> {
        return this.http.get<IState>('assets/feature1data/data.json');
    }
}
