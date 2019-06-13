import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

// import { RugService } from '../rug.service';
import { IRug } from '../rug';

@Component({
    selector: 'add-rug',
    templateUrl: './rug-add.component.html',
    styleUrls: ['./rug-add.component.css']
})
export class RugListComponent implements OnInit {
    title = 'Add Rug';
    rugs: IRug[];

    // constructor(private rugService: RugService) { }

    ngOnInit(): void {
        // this.rugs = this.rugService.getRugs();
    }
}