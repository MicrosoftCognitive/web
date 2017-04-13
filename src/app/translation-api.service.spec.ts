/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslationAPIService } from './translation-api.service';

describe('TranslationAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationAPIService]
    });
  });

  it('should ...', inject([TranslationAPIService], (service: TranslationAPIService) => {
    expect(service).toBeTruthy();
  }));
});
