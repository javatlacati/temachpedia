import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyRoomComponent } from './trophy-room.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TrophyRoomComponent', () => {
  let component: TrophyRoomComponent;
  let fixture: ComponentFixture<TrophyRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrophyRoomComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    fixture = TestBed.createComponent(TrophyRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
