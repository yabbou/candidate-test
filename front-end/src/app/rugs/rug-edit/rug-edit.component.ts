import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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

  constructor(private builder: FormBuilder, private service: RugService) {
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
    this.service.editRug(name, id, availability, price);
  }

  ngOnInit() {
    this.rugForm = new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
      availability: new FormControl(),
      price: new FormControl()
    });
  }

  // saveRug(): void {
  //   if (this.rugForm.valid) {
  //     if (this.rugForm.dirty) {
  //       const p = { ...this.rug, ...this.rugForm.value }; 
  //       if (p.id === 0) {
  //         this.rugService.createRug(p)
  //           .subscribe(
  //             () => this.onSaveComplete(),
  //             (error: any) => this.errorMessage = <any>error
  //           );
  //       } else {
  //         this.rugService.updateRug(p)
  //           .subscribe(
  //             () => this.onSaveComplete(),
  //             (error: any) => this.errorMessage = <any>error
  //           );
  //       }
  //     } else {
  //       this.onSaveComplete();
  //     }
  //   } else {
  //     this.errorMessage = 'Please correct the validation errors.';
  //   }
  // }

}
