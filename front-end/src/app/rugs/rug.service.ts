import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Rug } from './rug';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: "root" })
export class RugService {
    private uri = 'http://localhost:4000/rugs';

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
            availability: null,
            price: 0
        };
    }

    editRug(name, id, availability, price): void {
        const rug = {
            name: name,
            id: id,
            availability: availability,
            price: price
        };
        console.log(rug);

        this.http.post<Rug>(`${this.uri}/add`, rug).subscribe(
            () => console.log('Done')
        );
    }

    deleteRug(id: number): Observable<{}> {
        return this.http.delete<Rug>(`${this.uri}/${id}/delete`);
    }
}
