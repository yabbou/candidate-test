import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Rug } from './rug';
import { Observable, of } from 'rxjs';

// import { RugModel } from '/Users/yaakov/Dropbox/Public/Code/WebStromProjects/rug-company/back-end/models/Rug';

@Injectable({ providedIn: "root" })
export class RugService {
    private uri = 'http://localhost:4000/rugs';
    // model = new RugModel();

    constructor(private http: HttpClient) { }

    getRugs(): Observable<Rug[]> {
        return this.http.get<Rug[]>(`${this.uri}`);
    }

    getRug(id: number): Observable<Rug> {
        if (id === 0) { return of(this.initializeProduct()); }
        return this.http.get<Rug>(`${this.uri}/${id}`);
    }

    private initializeProduct(): Rug {
        return {
            name: null,
            id: 0,
            // id: this.model.find({ lastElement: { $slice: -1 } }).id + 1,
            availability: null,
            price: 0
        };
    }

    addRug(rug: Rug): Observable<Rug> {
        console.log(rug);
        return this.http.post<Rug>(`${this.uri}/add`, rug);
    }

    updateRug(rug: Rug): Observable<Rug> {
        console.log(rug);
        return this.http.put<Rug>(`${this.uri}/${rug.id}/update`, rug);
    }

    deleteRug(id: number): Observable<{}> {
        return this.http.get<Rug>(`${this.uri}/${id}/delete`);
    }
}
