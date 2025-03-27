import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { CompasDeHierroComponent } from './compas-de-hierro.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('CompasDeHierroComponent', () => {
  let component: CompasDeHierroComponent;
  let fixture: ComponentFixture<CompasDeHierroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompasDeHierroComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), MessageService],
    });
    fixture = TestBed.createComponent(CompasDeHierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
