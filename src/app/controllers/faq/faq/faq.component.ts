import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { NgFor } from '@angular/common';
import { Panel } from 'primeng/panel';
import { Inplace } from 'primeng/inplace';
import { PrimeTemplate } from 'primeng/api';

interface Faq {
  enunciado: string;
  respuesta: string;
  fuente: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  imports: [Card, NgFor, Panel, Inplace, PrimeTemplate],
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
