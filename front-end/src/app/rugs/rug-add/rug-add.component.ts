import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IRug } from '../rug';

@Component({
    selector: 'rug-add',
    templateUrl: './rug-add.component.html',
    styleUrls: ['./rug-add.component.css']
})
export class RugAddComponent implements OnInit {
    title = 'Add Rug';
    rugForm: FormGroup;
    rugs: IRug[];

    constructor(private builder: FormBuilder) { }

    ngOnInit(): void {
        this.rugForm = this.builder.group({
            rugName: '',
            id: 0,
            available: '',
            price: 0
        })
    }
}