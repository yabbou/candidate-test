import { Component, OnInit } from '@angular/core';
import { Rug } from '../rug';
import { ActivatedRoute, Router } from '@angular/router';
import { RugService } from '../rug.service';


@Component({
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css']
})
export class RugDetailComponent implements OnInit {
  title = "Rug Details";
  rug: Rug;

  constructor(private route: ActivatedRoute, private router: Router,
    private rugService: RugService) {
  }

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id');
    // this.title += `: ${id}`;

    if (param) {
      const id = +param;
      this.getRug(id);
    }

    // this.rug = {
    //   "name": "African Rug",
    //   "id": 2,
    //   "availability": "In-stock",
    //   "price": 400
    // };
  }

  getRug(id: number) {
    this.rugService.getRug(id);
    // .subscribe(
    //   (data: Rug) => { this.rug = data; }
    //   );
  }

  onBack(): void {
    this.router.navigate(['/rug-list']);
  }
}
