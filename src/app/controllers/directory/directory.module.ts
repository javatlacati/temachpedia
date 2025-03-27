import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { DirectoryComponent } from './directory.component';
import { CompasDeHierroComponent } from './compas-de-hierro/compas-de-hierro.component';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { OfficialAccountsComponent } from './official-accounts/official-accounts.component';
import { ImageModule } from 'primeng/image';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { MusicPlatformsComponent } from './music-platforms/music-platforms.component';

@NgModule({
  declarations: [DirectoryComponent, CompasDeHierroComponent, OfficialAccountsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DirectoryComponent }]),
    CardModule,
    ListboxModule,
    FormsModule,
    LeafletModule,
    ImageModule,
    ContextMenuModule,
    ToastModule,
    MusicPlatformsComponent,
  ],
})
export class DirectoryModule {}
