import { TestBed } from '@angular/core/testing';

import { FileReadService } from './file-read.service';

describe('FileReadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileReadService = TestBed.get(FileReadService);
    expect(service).toBeTruthy();
  });
});
