import { TestBed } from '@angular/core/testing';

import { ContentTotalService } from './content-total-with-price.service';

describe('ContentTotalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentTotalService = TestBed.get(ContentTotalService);
    expect(service).toBeTruthy();
  });
});
