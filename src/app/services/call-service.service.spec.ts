import { TestBed } from '@angular/core/testing';

import { CallServiceService } from './call-service.service';

describe('CallServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallServiceService = TestBed.get(CallServiceService);
    expect(service).toBeTruthy();
  });
});
