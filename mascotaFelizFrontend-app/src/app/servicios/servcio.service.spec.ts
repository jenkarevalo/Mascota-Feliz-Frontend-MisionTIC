import { TestBed } from '@angular/core/testing';

import { ServcioService } from './servcio.service';

describe('ServcioService', () => {
  let service: ServcioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
