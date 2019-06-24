import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './rugs/home/home.component';
import { RugListComponent } from './rugs/rug-list/rug-list.component';
import { RugDetailComponent } from './rugs/rug-details/rug-detail.component';
import { RugEditComponent } from './rugs/rug-edit/rug-edit.component';

import { RugService } from './rugs/rug.service';
// import { RugModel } from '/Users/yaakov/Dropbox/Public/Code/WebStromProjects/rug-company/back-end/models/Rug';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
