import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private readonly router: Router) {}

  async goToPage(pageName: string) {
    await this.router.navigate([`${pageName}`]);
  }
}
