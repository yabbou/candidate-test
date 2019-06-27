import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rug } from '../rug';
import { RugService } from '../rug.service';
import { RugListComponent } from '../rug-list/rug-list.component';

@Component({
  templateUrl: './rug-detail.component.html',
  styleUrls: ['./rug-detail.component.css']
})
export class RugDetailComponent implements OnInit {
  title = "Rug Details";
  rug: Rug;

  constructor(private route: ActivatedRoute, private router: Router,
    private rugService: RugService, private rugListComponent: RugListComponent) {
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

  deleteRug(rug: Rug): void {
    this.rugListComponent.deleteRug(rug);
    this.onBack();
  }

  onBack(): void {
    this.router.navigate(['/rug-list']);
  }
}
