import { TestBed } from '@angular/core/testing';

import { SedeslcdhService } from './sedeslcdh.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('SedeslcdhService', () => {
  let service: SedeslcdhService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(SedeslcdhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
