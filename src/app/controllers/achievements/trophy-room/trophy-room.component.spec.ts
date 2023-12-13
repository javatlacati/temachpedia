import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyRoomComponent } from './trophy-room.component';

describe('TrophyRoomComponent', () => {
  let component: TrophyRoomComponent;
  let fixture: ComponentFixture<TrophyRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrophyRoomComponent]
    });
    fixture = TestBed.createComponent(TrophyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
