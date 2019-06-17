import { Component, OnInit } from '@angular/core';
import { Rug } from '../rug';
import { RugService } from '../rug.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './rug-list.component.html',
    styleUrls: ['./rug-list.component.css']
})
export class RugListComponent implements OnInit {
    title = 'Rug List';
    rugs: Rug[];

    constructor(private rugService: RugService, 
        private router: Router) { }

    ngOnInit(): void {
        this.rugs = this.rugService.getRugs();
    }
}