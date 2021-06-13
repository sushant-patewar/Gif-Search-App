/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GifSearchService } from './gif-search.service';

describe('Service: GifSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GifSearchService]
    });
  });

  it('should ...', inject([GifSearchService], (service: GifSearchService) => {
    expect(service).toBeTruthy();
  }));
});
