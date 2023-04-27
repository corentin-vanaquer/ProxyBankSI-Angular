import { TestBed } from '@angular/core/testing';

import { ListCandidatServiceService } from './list-client.service';

describe('ListCandidatServiceService', () => {
  let service: ListCandidatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCandidatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
