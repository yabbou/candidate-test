import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RugService } from '../rug.service';
import { Rug } from '../rug';
import { Subscription } from 'rxjs';
import { RugListComponent } from '../rug-list/rug-list.component';

@Component({
  selector: 'rug-edit',
  templateUrl: './rug-edit.component.html',
  styleUrls: ['./rug-edit.component.css']
})
export class RugEditComponent implements OnInit {
  title = 'Add Rug';
  rugForm: FormGroup;
  rug: Rug;

  validationMessages: {
    name: { required: string; minlength: string; maxlength: string; };
    id: { required: string; };
    availability: { required: string; minlength: string; maxlength: string; };
    price: { required: string; };
  };
  genericValidator: Validators;
  sub: Subscription;

  constructor(private builder: FormBuilder, private rugService: RugService,
    private router: Router, private route: ActivatedRoute) {

    this.createForm();

    this.validationMessages = {
      name: {
        required: 'Rug name is required.',
        minlength: 'Rug name must be at least three characters.',
        maxlength: 'Rug name cannot exceed 25 characters.'
      },
      id: {
        required: 'Rug id is required.'
      },
      availability: {
        required: 'Rug availability is required.',
        minlength: 'Rug availability must be at least three characters.',
        maxlength: 'Rug availability cannot exceed 25 characters.'
      },
      price: {
        required: 'Rug id is required.'
      }
    };
    // this.genericValidator = new Validators(this.validationMessages);
  }

  createForm() {
    this.rugForm = this.builder.group({
      name: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)]],
      id: ['', Validators.required],
      availability: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)]],
      price: ''
    });
  }

  editRug(name: string, id: number, availability: string, price: number) {
    this.rugService.editRug(name, id, availability, price);
    this.onAdd();
  }

  ngOnInit() {
    this.createForm;

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getRug(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  displayRug(rug: Rug): void {
    if (this.rugForm) {
      this.rugForm.reset();
    }
    this.rug = rug;

    if (this.rug.id !== 0) {
      this.title = `Edit Rug: ${this.rug.name}`;
    }

    this.rugForm.patchValue({
      name: this.rug.name,
      id: this.rug.id,
      availability: this.rug.availability,
      price: this.rug.price
    });
  }

  getRug(id: number): void {
    this.rugService.getRug(id).subscribe(
      rug => { this.rug = rug }
    );
  }

  onAdd(): void {
    this.router.navigate(['/rug-list']);
  }

  onCancel(): void {
    this.rugForm.reset();
    this.router.navigate(['/rug-list']);
  }
}
