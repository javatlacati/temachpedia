import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './controllers/home/home.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CardModule, BrowserAnimationsModule, TooltipModule],
  providers: [MessageService, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
