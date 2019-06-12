import { Component } from '@angular/core';

@Component({
    selector: 'rugs',
    templateUrl: './rug-list.component.html',
    styleUrls: ['./rug-list.component.css']
})
export class RugListComponent {
    title = 'Rug List';
    rugs: any[] = [{
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