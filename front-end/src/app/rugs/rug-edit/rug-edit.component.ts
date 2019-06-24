import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RugService } from '../rug.service';
import { Rug } from '../rug';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rug-edit',
  templateUrl: './rug-edit.component.html',
  styleUrls: ['./rug-edit.component.css']
})
export class RugEditComponent implements OnInit {
  title: string;
  rugForm: FormGroup;
  rug: Rug;

  sub: Subscription;
  validationMessages: {
    name: { required: string; minlength: string; maxlength: string; };
    id: { required: string; };
    availability: { required: string; minlength: string; maxlength: string; };
    price: { required: string; };
  };
  genericValidator: Validators;

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
      form_n: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)]],
      form_i: ['', Validators.required],
      form_a: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)]],
      form_p: ''
    });
  }

  ngOnInit() {
    this.createForm;
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getRug(id);
      });
  }

  getRug(id: number): void {
    this.rugService.getRug(id)
      .subscribe(
        (rug: Rug) => { this.getForm(rug) }
      );
  }

  getForm(rug: Rug): void {
    this.rug = rug;

    if (this.rug.id === 0) {
      this.title = 'Add Rug';
    } else {
      this.title = `Edit Rug: ${this.rug.id}: ${this.rug.name}`;

      this.rugForm.setValue({
        form_n: this.rug.name,
        form_i: this.rug.id,
        form_a: this.rug.availability,
        form_p: this.rug.price
      });
    }
  }

  saveRug(name: string, id: number, availability: string, price: number): void {
    const r = {
      name: name,
      id: id,
      availability: availability,
      price: price
    };

    if (id === 0) {
      this.rugService.addRug(r).subscribe(
        () => console.log('Added')
      );
    } else {
      this.rugService.updateRug(r).subscribe(
        () => console.log('Updated')
      );
    }
    this.onDone();
  }

  onDone(): void {
    this.rugForm.reset();
    this.router.navigate(['/rug-list']);
  }

  onDestroy() {
    this.sub.unsubscribe();
  }
}
