import { TestBed } from '@angular/core/testing';

import { ExamformService } from './examform.service';

describe('ExamformService', () => {
  let service: ExamformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
