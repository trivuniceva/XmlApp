import { TestBed } from '@angular/core/testing';

import { CopyrightSubmissionService } from './copyright-submission.service';

describe('CopyrightSubmissionService', () => {
  let service: CopyrightSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyrightSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
