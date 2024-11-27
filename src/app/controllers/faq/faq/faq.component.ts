import { Component } from '@angular/core';

interface Faq {
  enunciado: string;
  respuesta: string;
  fuente: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: false,
})
export class FaqComponent {
  faqs: Faq[] = [];

  constructor() {
    this.faqs = [
      {
        enunciado: 'Si soy mujer, ¿Puedo ir a los compas de hierro?',
        respuesta: 'Sí',
        fuente: 'https://www.youtube.com/live/4zvABlShz5w?si=B9gtOrq6JM7ZDXX_&t=860',
      },
      {
        enunciado: '¿Cuanto cuesta ir a los compas de hierro?',
        respuesta: 'Nada, es gratis',
        fuente: 'https://www.youtube.com/live/4zvABlShz5w?si=B9gtOrq6JM7ZDXX_&t=860',
      },
    ];
  }
}
