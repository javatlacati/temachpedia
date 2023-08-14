import { TestBed } from '@angular/core/testing';

import { DatasetLoaderService } from './dataset-loader.service';

describe('DatasetLoaderService', () => {
  let service: DatasetLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasetLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
