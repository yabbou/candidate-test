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
  validator: Validators;

  constructor(private builder: FormBuilder, private rugService: RugService,
    private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.rugForm = this.builder.group({
      formName: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)]],
      formId: ['', Validators.required],
      formAv: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)]],
      formPrice: ''
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
        formName: this.rug.name,
        formId: this.rug.id,
        formAv: this.rug.availability,
        formPrice: this.rug.price
      });
    }
  }

  saveRug(): void {
    const r = {
      name: this.rugForm.value.formName,
      id: this.rugForm.value.formId,
      availability: this.rugForm.value.formAv,
      price: this.rugForm.value.formPrice
    };

    if (this.title === 'Add Rug') {
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
