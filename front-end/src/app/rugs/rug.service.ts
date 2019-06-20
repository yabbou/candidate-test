import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Rug } from './rug';

@Injectable({ providedIn: "root" })
export class RugService {
    private uri = 'http://localhost:4000/rugs';

    constructor(private http: HttpClient) { }

    getRugs() {
        return this.http.get(`${this.uri}`);
    }

    getRug(id: number) {
        return this.http.get(`${this.uri}/${id}`);
    }

    editRug(name, id, availability, price) {
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

    deleteRug(id: number) {
        return this.http.delete<Rug>(`${this.uri}/${id}/delete`);
    }
}
