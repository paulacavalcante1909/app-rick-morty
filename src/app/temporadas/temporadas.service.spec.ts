import { TestBed } from '@angular/core/testing';

import { TemporadasService } from './temporadas.service';

describe('TemporadasService', () => {
  let service: TemporadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
