import { TestBed } from '@angular/core/testing';

import { LazyloadGuard } from './lazyload.guard';

describe('LazyloadGuard', () => {
  let guard: LazyloadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LazyloadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
