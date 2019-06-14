import { Component, OnInit } from '@angular/core';
import { IRug } from '../rug';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css']
})
export class RugDetailComponent implements OnInit {
  title = "Rug Details";
  rug: IRug;

  constructor(private route: ActivatedRoute, 
    private router: Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.title += `:${id}`;
    this.rug = {
      "rugName": "African Rug",
      "id": 2,
      "available": "In-stock",
      "price": 400
    };
  }

  onBack(): void{
    this.router.navigate(['/rug-list']);
  }
}
