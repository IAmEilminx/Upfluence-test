import { TestBed } from '@angular/core/testing';

import { UpfluenceSseService } from './upfluence-sse.service';

describe('UpfluenceSseService', () => {
  let service: UpfluenceSseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpfluenceSseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
