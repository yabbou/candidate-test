import { Injectable } from "@angular/core";
import { IRug } from './rug';

@Injectable({ providedIn: "root" })
export class RugService {
    getRugs(): IRug[] {
        return [{
            "rugName": "Persian Rug",
            "id": 1,
            "available": "In-stock",
            "price": 500
        },
        {
            "rugName": "African Rug",
            "id": 2,
            "available": "In-stock",
            "price": 400
        }];
    }
}