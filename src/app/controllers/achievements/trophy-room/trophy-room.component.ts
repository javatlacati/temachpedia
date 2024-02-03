import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-trophy-room',
  templateUrl: './trophy-room.component.html',
  styleUrls: ['./trophy-room.component.scss'],
})
export class TrophyRoomComponent {
  layout: 'grid' | 'list' = 'list';
  heads: any = [];
  responsiveOptions: any;

  constructor(private readonly renderer: Renderer2) {
    this.heads = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Alejandro Rodríguez',
        description: 'asdas',
        image: 80,
        price: 34,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        isMale: true,
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 81,
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        isMale: true,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 12,
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        isMale: true,
      },
      {
        id: '1006',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'Product Description',
        image: 22,
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
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

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return 'success';
  }
}
