import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqComponent } from './faq.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FaqComponent],
      providers: [provideAnimations()],
    });
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
