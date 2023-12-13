import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private renderer: Renderer2) {
    renderer.setStyle (
      document.body,
      "background-image",
      "url('/assets/peacuful male warrior.webp')"
    );
  }
}
