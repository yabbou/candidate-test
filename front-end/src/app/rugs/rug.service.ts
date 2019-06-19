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
        if (id === 0) { return this.initializeRug(); }
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

        this.http.post(`${this.uri}/add`, rug).subscribe(
            () => console.log('Done')
        );

        // this.http
        //     .post(`${this.uri}/0/edit`, rug)
        //     .subscribe(() => console.log('Done'));
    }

    deleteRug(id: number) {
        return this.http.get(`${this.uri}/${id}/delete`);
    }

    private initializeRug(): Rug {
        return {
            name: null,
            id: 0,
            availability: null,
            price: null
        };
    }
}
