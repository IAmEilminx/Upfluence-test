import { TestBed } from '@angular/core/testing';

import { UpfluenceSseService } from './upfluence-sse.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpfluenceSseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UpfluenceSseService
      ]
    });
  });

  it('should be created', () => {
    const service: UpfluenceSseService = TestBed.get(UpfluenceSseService);
    expect(service).toBeTruthy();
  });
});
