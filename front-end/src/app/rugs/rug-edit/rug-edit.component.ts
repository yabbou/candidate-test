import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { RugService } from '../rug.service';
import { Rug } from '../rug';

@Component({
  selector: 'rug-edit',
  templateUrl: './rug-edit.component.html',
  styleUrls: ['./rug-edit.component.css']
})
export class RugEditComponent implements OnInit {
  title = 'Add Rug';
  rugForm: FormGroup;
  rug = new Rug();

  constructor(private builder: FormBuilder, private rugService: RugService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.rugForm = this.builder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      availability: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  editRug(name: string, id: number, availability: string, price: number) {
    this.rugService.editRug(name, id, availability, price);
    this.onAdd();
  }

  ngOnInit() {
    this.rugForm = new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
      availability: new FormControl(),
      price: new FormControl()
    });
  }

  onAdd(): void {
    this.router.navigate(['/rug-list']);
  }
}
