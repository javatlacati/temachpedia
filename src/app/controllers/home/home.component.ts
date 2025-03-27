import { Component, Renderer2 } from '@angular/core';
import { Card } from 'primeng/card';
import { RouterLink } from '@angular/router';
import { Tooltip } from 'primeng/tooltip';
import { SharedModule } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [Card, RouterLink, Tooltip, SharedModule],
})
export class HomeComponent {
  constructor(private readonly renderer: Renderer2) {
    renderer.setStyle(
      document.body,
      'background-image',
      "url('/assets/peacuful male warrior.webp')",
    );
  }
}
