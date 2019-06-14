import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RugListComponent } from './rugs/rugs/rugs.component';
import { RugDetailComponent } from './rugs/rug-details/rug-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RugListComponent,
    RugDetailComponent
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
