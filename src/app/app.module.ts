import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './controllers/home/home.component';
import {TooltipModule} from "primeng/tooltip";
import { DirectoryComponent } from './controllers/directory/directory.component';
import { CompasDeHierroComponent } from './controllers/directory/compas-de-hierro/compas-de-hierro.component';
import {ListboxModule} from "primeng/listbox";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    CompasDeHierroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    BrowserAnimationsModule,
    TooltipModule,
    ListboxModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
