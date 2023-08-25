import { TestBed } from '@angular/core/testing';

import { RessolveGuard } from './ressolve.guard';

describe('RessolveGuard', () => {
  let guard: RessolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RessolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
