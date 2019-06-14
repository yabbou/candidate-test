import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RugListComponent } from './rugs/rug-list/rug-list.component';
import { RugDetailComponent } from './rugs/rug-details/rug-detail.component';
import { HomeComponent } from './rugs/home/home.component';

const routes: Routes = [
  { path: 'rug-list', component: RugListComponent },
  { path: 'rug-list/:id', component: RugDetailComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
