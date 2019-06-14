import { Component, OnInit } from '@angular/core';
import { IRug } from '../rug';

@Component({
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css']
})
export class RugDetailComponent implements OnInit {
  title = 'Rug Detail';
  rug: IRug;

  constructor() { }

  ngOnInit() {
  }
}
