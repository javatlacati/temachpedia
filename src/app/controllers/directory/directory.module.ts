import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CardModule} from "primeng/card";
import {ListboxModule} from "primeng/listbox";
import {DirectoryComponent} from "./directory.component";
import {CompasDeHierroComponent} from "./compas-de-hierro/compas-de-hierro.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DirectoryComponent,
    CompasDeHierroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DirectoryComponent},
    ]),
    CardModule,
    ListboxModule,
    FormsModule,
  ]
})
export class DirectoryModule {
}
