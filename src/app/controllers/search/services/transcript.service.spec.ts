import { TestBed } from '@angular/core/testing';

import { TranscriptService } from './transcript.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TranscriptService', () => {
  let service: TranscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TranscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
