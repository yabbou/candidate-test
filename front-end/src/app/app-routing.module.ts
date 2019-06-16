import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './rugs/home/home.component';
import { RugListComponent } from './rugs/rug-list/rug-list.component';
import { RugDetailComponent } from './rugs/rug-details/rug-detail.component';
import { RugEditComponent } from './rugs/rug-edit/rug-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'rug-list', component: RugListComponent },
  { path: 'rug-list/:id', component: RugDetailComponent },
  { path: 'rug-list/:id/edit', component: RugEditComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
