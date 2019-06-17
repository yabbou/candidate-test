import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rug } from './rug';

// import { Observable, of, throwError } from 'rxjs';
// import { catchError, tap, map } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class RugService {
    private uri = 'http://localhost:4000/rug';
    // RugsUrl: any;

    constructor(private http: HttpClient) { }

    getRugs(): Rug[] {
        return [{
            "name": "Persian Rug",
            "id": 1,
            "availability": "In-stock",
            "price": 500
        },
        {
            "name": "African Rug",
            "id": 2,
            "availability": "In-stock",
            "price": 400
        }];
    }

    // getRugs_(): Observable<Rug[]> {

    //     return this.http.get<Rug[]>(this.RugsUrl)
    //         .pipe(
    //             tap(data => console.log(JSON.stringify(data))),
    //             catchError(this.handleError)
    //         );
    // }

    // getRug(id: number): Observable<Rug> {
    //     if (id === 0) {
    //         return of(this.initializeRug());
    //     }

    //     const url = `${this.RugsUrl}/${id}`;
    //     return this.http.get<Rug>(url)
    //         .pipe(
    //             tap(data => console.log('getRug: ' + JSON.stringify(data))),
    //             catchError(this.handleError)

    //         );
    // }

    // editRug2(rug: Rug): Observable<Rug> {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     rug.id = null;

    //     return this.http.post<Rug>(this.RugsUrl, rug, { headers: headers })
    //         .pipe(
    //             tap(data => console.log('editRug: ' + JSON.stringify(data))),
    //             catchError(this.handleError)
    //         );
    // }

    editRug(name, id, availability, price) {
        const rug = {
            name: name,
            id: id,
            availability: availability,
            price: price
        };
        console.log(rug);
        this.http.post(`${this.uri}/edit`, rug)
            .subscribe(() => console.log('Done'));
    }

    // deleteRug(id: number): Observable<{}> {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     const url = `${this.RugsUrl}/${id}`;

    //     return this.http.delete<Rug>(url, { headers: headers })
    //         .pipe(
    //             tap(data => console.log('deleteRug: ' + id)),
    //             catchError(this.handleError)
    //         );
    // }

    // updateRug(Rug: Rug): Observable<Rug> {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     const url = `${this.RugsUrl}/${Rug.id}`;

    //     return this.http.put<Rug>(url, Rug, { headers: headers })
    //         .pipe(
    //             tap(() => console.log('updateRug: ' + Rug.id)),
    //             map(() => Rug),
    //             catchError(this.handleError)

    //         );
    // }

    // private handleError(err) {
    //     let errorMessage: string;

    //     if (err.error instanceof ErrorEvent) {
    //         errorMessage = `An error occurred: ${err.error.message}`;
    //     } else {
    //         errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    //     }

    //     console.error(err);
    //     return throwError(errorMessage);
    // }

    private initializeRug(): Rug {
        return {
            name: null,
            id: 0,
            availability: null,
            price: null
        };
    }
}
