import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RugListComponent } from './rugs/rug-list/rug-list.component';
import { RugDetailComponent } from './rugs/rug-details/rug-detail.component';
import { HomeComponent } from './rugs/home/home.component';
import { RugEditComponent } from './rugs/rug-edit/rug-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RugListComponent,
    RugDetailComponent,
    RugEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
