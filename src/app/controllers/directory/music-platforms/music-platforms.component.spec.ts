import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlatformsComponent } from './music-platforms.component';

describe('MusicPlatformsComponent', () => {
  let component: MusicPlatformsComponent;
  let fixture: ComponentFixture<MusicPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlatformsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MusicPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
