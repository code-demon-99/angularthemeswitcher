import { TestBed } from '@angular/core/testing';

import { StyleManagerService } from './style-manager.service';

describe('StyleMangerService', () => {
  let service: StyleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
