import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { OfficialAccountsComponent } from './official-accounts/official-accounts.component';
import { MusicPlatformsComponent } from './music-platforms/music-platforms.component';
import { CompasDeHierroComponent } from './compas-de-hierro/compas-de-hierro.component';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
  imports: [Card, OfficialAccountsComponent, MusicPlatformsComponent, CompasDeHierroComponent],
})
export class DirectoryComponent {}
