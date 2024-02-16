import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { SongComponent } from './song.component';

describe('SongComponent', () => {
  let component: SongComponent;
  let fixture: ComponentFixture<SongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongComponent],
    });
    fixture = TestBed.createComponent(SongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
