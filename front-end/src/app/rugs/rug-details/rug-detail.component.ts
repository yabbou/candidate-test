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
    const id = this.route.snapshot.paramMap.get('id');
    this.title += `: ${id}`;

    if (id) {
      this.getRug(+id);
    }
  }

  getRug(id: number): void {
    this.rugService.getRug(id).subscribe(
      rug => { this.rug = rug }
    );
  }

  onBack(): void {
    this.router.navigate(['/rug-list']);
  }
}
