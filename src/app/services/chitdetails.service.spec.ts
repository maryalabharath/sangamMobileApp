import { TestBed } from '@angular/core/testing';

import { ChitdetailsService } from './chitdetails.service';

describe('ChitdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChitdetailsService = TestBed.get(ChitdetailsService);
    expect(service).toBeTruthy();
  });
});
