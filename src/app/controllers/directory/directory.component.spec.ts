import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryComponent } from './directory.component';

describe('DirectoryComponent', () => {
  let component: DirectoryComponent;
  let fixture: ComponentFixture<DirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectoryComponent],
    });
    fixture = TestBed.createComponent(DirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
