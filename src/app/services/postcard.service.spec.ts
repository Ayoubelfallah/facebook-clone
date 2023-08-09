import { TestBed } from '@angular/core/testing';

import { PostcardService } from './postcard.service';

describe('PostcardService', () => {
  let service: PostcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
