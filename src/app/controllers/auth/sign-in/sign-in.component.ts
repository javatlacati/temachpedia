import { Component } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation.service';
import { info } from 'autoprefixer';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Tooltip } from 'primeng/tooltip';
import { Password } from 'primeng/password';
import { Checkbox } from 'primeng/checkbox';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-sign-in',
  // standalone: true,
  // imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  imports: [Card, Button, FormsModule, InputText, Tooltip, Password, Checkbox, Image],
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
