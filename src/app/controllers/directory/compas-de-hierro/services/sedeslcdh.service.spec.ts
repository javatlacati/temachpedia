import { TestBed } from '@angular/core/testing';

import { SedeslcdhService } from './sedeslcdh.service';

describe('SedeslcdhService', () => {
  let service: SedeslcdhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedeslcdhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
