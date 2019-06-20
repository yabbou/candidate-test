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
    rug:Rug;

    constructor(private rugService: RugService) { }

    ngOnInit(): void { 
        this.rugService.getRugs().subscribe(
            (data: Rug[]) => { this.rugs = data; }
        );
    }

    deleteRug(id: number) : void { 
        this.rugService.deleteRug(id).subscribe(
            () => { console.log('Deleted'); }
        );
    }
}