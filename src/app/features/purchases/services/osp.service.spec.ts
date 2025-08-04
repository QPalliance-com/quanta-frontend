import { TestBed } from '@angular/core/testing';

import { OspService } from './osp.service';

describe('OspService', () => {
  let service: OspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
