import { Component, OnInit } from '@angular/core';
import { IRug } from '../rug';
import { RugService } from '../rug.service';

@Component({
    selector: 'rugs',
    templateUrl: './rugs.component.html',
    styleUrls: ['./rugs.component.css']
})
export class RugListComponent implements OnInit {
    title = 'Rug List';
    rugs: IRug[];

    constructor(private rugService: RugService) { }

    ngOnInit(): void {
        this.rugs = this.rugService.getRugs();
    }
}