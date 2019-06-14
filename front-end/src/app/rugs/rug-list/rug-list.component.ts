import { Component, OnInit } from '@angular/core';
import { IRug } from '../rug';
import { RugService } from '../rug.service';

@Component({
    templateUrl: './rug-list.component.html',
    styleUrls: ['./rug-list.component.css']
})
export class RugListComponent implements OnInit {
    rugListTitle = 'Rug List';
    rugs: IRug[];

    constructor(private rugService: RugService) { }

    ngOnInit(): void {
        this.rugs = this.rugService.getRugs();
    }
}