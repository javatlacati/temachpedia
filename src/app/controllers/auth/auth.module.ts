import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ImageModule } from 'primeng/image';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    ImageModule,
    CardModule,
    ButtonModule,
    FormsModule,
    PasswordModule,
    CheckboxModule,
    TooltipModule,
    InputTextModule,
    RouterModule.forChild([{ path: 'signin', component: SignInComponent }]),
  ],
})
export class AuthModule {}
