import { Component, OnInit } from '@angular/core';
import { Rug } from '../rug';
import { RugService } from '../rug.service';

@Component({
    templateUrl: './rug-list.component.html',
    styleUrls: ['./rug-list.component.css']
})
export class RugListComponent implements OnInit {
    title = 'Rug List';
    rugs: Rug[];
    rug: Rug;

    constructor(private rugService: RugService) { }

    ngOnInit(): void {
        this.rugService.getRugs().subscribe(
            (rugs: Rug[]) => { this.rugs = rugs; }
        );
    }

    deleteRug(rug: Rug): void {
        if (confirm(`Are you sure you want to delete rug: ${rug.name}?`)) {
            this.rugService.deleteRug(rug.id).subscribe(
                res => { console.log('Deleted'); }
            );
        }
    }
}