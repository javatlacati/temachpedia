import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-trophy-room',
  templateUrl: './trophy-room.component.html',
  styleUrls: ['./trophy-room.component.scss'],
})
export class TrophyRoomComponent {
  layout: 'grid' | 'list' = 'list';
  categories: string[] = [
    'Superación personal',
    'Negocios',
    'Estudio',
    'Relaciones',
    'Cambio físico',
  ];

  heads: any = [];
  responsiveOptions: any;

  constructor(private readonly renderer: Renderer2) {
    this.heads = [
      {
        id: '1000',
        country: 've',
        name: 'Alejandro Rodríguez',
        title: 'Trazos de Resiliencia',
        description: 'La Historia de Marco Silva desde Florencia',
        image: 80,
        age: 26,
        category: 'Superación personal',
        quantity: 24,
        publishDate: new Date('12/19/2023'),
        isMale: true,
      },
      {
        id: '1001',
        country: 'us',
        name: 'Eliah González',
        description: 'La Melodía de Javier Morales un recién graduado de Juilliard',
        image: 81,
        age: 22,
        category: 'Estudio',
        quantity: 61,
        publishDate: new Date('12/19/2023'),
        title: 'Caminos Resonantes',
        isMale: true,
      },
      {
        id: '1002',
        country: 'mx',
        name: 'Francisco Sarabia',
        title: 'Decimotercera empresa',
        description: '¿Cómo pasé de depresión a tener 13 empresas? Aquí te lo cuento',
        image: 12,
        age: 31,
        category: 'Negocios',
        quantity: 2,
        publishDate: new Date('12/19/2023'),
        isMale: true,
      },
      {
        id: '1006',
        country: 'co',
        name: 'Lavue Nota',
        title: 'Boda',
        description: 'Primera boda de pareja de temacheros. El temach asistió a la boda.',
        image: 22,
        age: 29,
        category: 'Relaciones',
        quantity: 2,
        publishDate: new Date('12/19/2023'),
        isMale: false,
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    renderer.setStyle(document.body, 'background-image', "url('/assets/cavern room.webp')");
  }
}
