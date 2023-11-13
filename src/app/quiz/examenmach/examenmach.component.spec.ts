import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenmachComponent } from './examenmach.component';

describe('ExamenmachComponent', () => {
  let component: ExamenmachComponent;
  let fixture: ComponentFixture<ExamenmachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenmachComponent]
    });
    fixture = TestBed.createComponent(ExamenmachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
