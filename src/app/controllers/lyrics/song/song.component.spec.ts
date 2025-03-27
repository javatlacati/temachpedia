import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { SongComponent } from './song.component';
import { provideRouter } from '@angular/router';

describe('SongComponent', () => {
  let component: SongComponent;
  let fixture: ComponentFixture<SongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SongComponent],
      providers: [provideRouter([])],
    });
    fixture = TestBed.createComponent(SongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
