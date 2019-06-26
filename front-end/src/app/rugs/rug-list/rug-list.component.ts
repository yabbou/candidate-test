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

    _filter: string;
    filteredRugs: Rug[];

    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    constructor(private rugService: RugService) {
        this.filteredRugs = this.rugs;
        this._filter = 'rug';
    }

    ngOnInit(): void {
        this.refreshRugs();
    }

    deleteRug(rug: Rug): void {
        if (confirm(`Are you sure you want to delete rug: ${rug.name}?`)) {
            this.rugService.deleteRug(rug.id).subscribe(
                res => {
                    console.log('Deleted');
                    this.refreshRugs();
                }
            );
        }
    }

    private refreshRugs() {
        this.rugService.getRugs().subscribe(
            (rugs: Rug[]) => { this.rugs = rugs; }
        );
    }

    get filter(): string {
        return this._filter;
    }
    set filter(filter: string) {
        this._filter = filter;
        this.filteredRugs = this.filter ? this.perfromFilter(this.filter) : this.rugs;
    }
    private perfromFilter(filterBy: string): Rug[] {
        filterBy.toLocaleLowerCase;
        return this.rugs.filter(
            (rug: Rug) => rug.name.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}