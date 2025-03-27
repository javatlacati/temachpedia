import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDashboardComponent } from './library-dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('LibraryDashboardComponent', () => {
  let component: LibraryDashboardComponent;
  let fixture: ComponentFixture<LibraryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryDashboardComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
