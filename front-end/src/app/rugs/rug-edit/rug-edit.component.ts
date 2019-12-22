import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  size: number;

  constructor(private builder: FormBuilder, private rugService: RugService,
    private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  private createForm(): void {
    this.rugForm = this.builder.group({
      formName: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(18)]],
      formId: this.size + 1,
      formAv: ['', [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10)]],
      formPrice: ['', [Validators.required,
      Validators.max(99999)]],
      formImage: 'http://chittagongit.com/download/317461'
    });
  }

  ngOnInit() {
    this.rugService.getRugs().subscribe(
      rugs => {
        this.size = rugs.length;
        this.createForm();
      }
    )

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getRug(id);
      });

  }

  getRug(id: number): void {
    this.rugService.getRug(id).subscribe(
      (rug: Rug) => { this.getForm(rug) }
    );
  }

  private getForm(rug: Rug): void {
    this.rug = rug;

    if (this.rug.id === 0) {
      this.title = 'Add Rug';
    } else {
      this.title = `Edit Rug: ${this.rug.id}: ${this.rug.name}`;

      this.rugForm.patchValue({
        formName: this.rug.name,
        formId: this.rug.id,
        formAv: this.rug.availability,
        formPrice: this.rug.price,
        formImage: this.rug.imageUrl
      });
    }
  }

  saveRug(): void {
    const r = {
      name: this.rugForm.value.formName,
      id: this.rugForm.value.formId,
      availability: this.rugForm.value.formAv,
      price: this.rugForm.value.formPrice,
      imageUrl: this.rugForm.value.formImage
    };

    if (confirm(`Are you sure you want to {{this.title | lowercase}}: ${r.name}?`)) {
      if (this.title === 'Add Rug') {
        this.rugService.addRug(r).subscribe(
          () => {
            console.log('Added');
            this.onDone();
          });
      } else {
        this.rugService.updateRug(r).subscribe(
          () => {
            console.log('Updated');
            this.onDone();
          });
      }
    }
  }

  onDone(): void {
    this.rugForm.reset();
    this.router.navigate(['/rug-list']);
  }

  onDestroy(): void {
    this.sub.unsubscribe();
  }
}
