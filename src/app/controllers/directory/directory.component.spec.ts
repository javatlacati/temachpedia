import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryComponent } from './directory.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MessageService } from 'primeng/api';

describe('DirectoryComponent', () => {
  let component: DirectoryComponent;
  let fixture: ComponentFixture<DirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DirectoryComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), MessageService],
    });
    fixture = TestBed.createComponent(DirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
