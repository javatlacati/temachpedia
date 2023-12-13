import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-trophy-room',
  templateUrl: './trophy-room.component.html',
  styleUrls: ['./trophy-room.component.scss']
})
export class TrophyRoomComponent {

  constructor(private renderer: Renderer2) {
    renderer.setStyle (
      document.body,
      "background-image",
      "url('/assets/cavern room.webp')"
    );
  }
}
