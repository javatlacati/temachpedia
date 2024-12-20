import { Component } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation.service';
import { info } from 'autoprefixer';

@Component({
  selector: 'app-sign-in',
  // standalone: true,
  // imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: false,
})
export class SignInComponent {
  email: any;
  pwd: any;
  remember: boolean = false;

  constructor(private readonly navigationService: NavigationService) {}

  async goToPage(pageName: string) {
    await this.navigationService.goToPage(pageName);
  }

  async login() {
    await this.navigationService.goToPage('home');
    return true;
  }

  protected readonly info = info;
}
