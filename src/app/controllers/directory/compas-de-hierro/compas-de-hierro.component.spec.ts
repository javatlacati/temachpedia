import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { CompasDeHierroComponent } from './compas-de-hierro.component';

describe('CompasDeHierroComponent', () => {
  let component: CompasDeHierroComponent;
  let fixture: ComponentFixture<CompasDeHierroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompasDeHierroComponent],
    });
    fixture = TestBed.createComponent(CompasDeHierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
