import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RugListComponent } from './rugs/rug-list/rug-list.component';
import { RugDetailComponent } from './rugs/rug-details/rug-detail.component';
import { HomeComponent } from './rugs/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RugListComponent,
    RugDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
