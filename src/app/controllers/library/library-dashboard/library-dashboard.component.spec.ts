import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDashboardComponent } from './library-dashboard.component';

describe('LibraryDashboardComponent', () => {
  let component: LibraryDashboardComponent;
  let fixture: ComponentFixture<LibraryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
