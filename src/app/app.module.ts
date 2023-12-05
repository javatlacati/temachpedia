import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from "./controllers/search/search.component";

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {PaginatorModule} from "primeng/paginator";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './controllers/home/home.component';
import {TooltipModule} from "primeng/tooltip";
import { SongListComponent } from './controllers/lyrics/song-list/song-list.component';
import { SongComponent } from './controllers/lyrics/song/song.component';
import { DirectoryComponent } from './controllers/directory/directory.component';
import { CompasDeHierroComponent } from './controllers/directory/compas-de-hierro/compas-de-hierro.component';
import {ListboxModule} from "primeng/listbox";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SongListComponent,
    SongComponent,
    DirectoryComponent,
    CompasDeHierroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    PaginatorModule,
    ToastModule,
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
