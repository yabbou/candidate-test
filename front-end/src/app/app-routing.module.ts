import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RugListComponent } from './rugs/rug-list/rug-list.component';
import { RugDetailComponent } from './rugs/rug-details/rug-detail.component';

const routes: Routes = [
  { path: 'rug-list', component: RugListComponent },
  { path: 'rug-list/:id', component: RugDetailComponent },
  // {path: '**', component : WelcomeComponent, pathmatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
