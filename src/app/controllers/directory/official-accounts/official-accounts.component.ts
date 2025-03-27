import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-official-accounts',
  templateUrl: './official-accounts.component.html',
  styleUrls: ['./official-accounts.component.scss'],
  imports: [Card, Image],
})
export class OfficialAccountsComponent {}
